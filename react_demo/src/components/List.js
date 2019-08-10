import React, {Component, Fragment} from 'react';
import img from '../Penguins.png';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import axios from 'axios';



class List extends Component {
  
    constructor(props){     
        super(props);
        this.state = {selected:[], totalSize:0, page: 1, sizePerPage: 10};
        this.handleSubmit  = this.handleSubmit.bind(this);
        this.fetchData = this.fetchData.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);  
        this.handleSizePerPageChange = this.handleSizePerPageChange.bind(this);   
        this.onSearchChange = this.onSearchChange.bind(this);   
        
        this.selectRowProp = {
                              mode: 'checkbox', 
                              bgColor: '#ccc',
                              onSelect: (row, isSelected, e)=>{
                                var arr = this.state.selected;
                                if(isSelected){
                                  arr.push(row.id);
                                  this.setState({selected:arr});
                                }else{                  
                                  arr = arr.filter(function(value, index, array){
                                    return value !== row.id;                                
                                  });
                                  this.setState({selected:arr});
                                }
                              },
                              onSelectAll: (isSelected, rows)=> {
                                var arr=[];
                                if(isSelected){
                                  rows.map((key,value)=>{
                                    arr.push(key.id);
                                  })
                                  this.setState({selected:arr});                                  
                                }else{
                                  this.setState({selected:[]});
                                }
                               
                              },
                            };   
    }
    componentDidMount() {
      this.fetchData();
    }
    handlePageChange(page, sizePerPage) {
      this.fetchData(null,page, sizePerPage);
    }
    handleSizePerPageChange(sizePerPage) {
      this.fetchData(null,1, sizePerPage);
    }
    onSearchChange(searchText, colInfos, multiColumnSearch) {
      this.fetchData(searchText);
    }
  
    fetchData(searchText=null, page = this.state.page, sizePerPage = this.state.sizePerPage){
      axios({
        method:'post',
        url:'http://localhost:3001/getstores',
        headers: {'Content-Type': 'application/json'},
        data: {page, sizePerPage, searchText},
      })
        .then(response => {
            let data = response.data.data;
            let totalSize = response.data.count[0].totalSize;
            this.setState({data:data, totalSize: totalSize, page, sizePerPage});
        })
    }
    handleSubmit(act){
        this.setState({action:act});
        axios({
          method: 'post',
          url: 'http://localhost:3001/deleteStores',
          data: JSON.stringify({'data':this.state.selected, 'action':this.state.action}),
          headers: {'Content-Type': 'application/json'}
        })
        .then(response => {
          let data = response.data.data;
          this.setState({data:data});
        })
    }
  

    render(){
     const options = {
        paginationPosition: 'top',
        page: this.state.page,
        sizePerPage: this.state.sizePerPage,
        onPageChange: this.handlePageChange,
        onSizePerPageList: this.handleSizePerPageChange,
        onSearchChange: this.onSearchChange,
        onRowClick:(row)=>{
          this.props.redirectLink('Form', row.id);
        }
      };
        return (
        <main role="main" className="container">
            <button onClick={()=> this.props.redirectLink('Form')}>Create New</button>
            <button onClick={()=> this.handleSubmit('delete')} >Delete</button>
            <BootstrapTable search  multiColumnSearch data={ this.state.data } pagination options={ options} selectRow={this.selectRowProp} 
            remote fetchInfo={{dataTotalSize: this.state.totalSize}}
            >
              <TableHeaderColumn dataField='id' isKey>ID</TableHeaderColumn>
              <TableHeaderColumn dataField='store_name'>Store Name</TableHeaderColumn>
              <TableHeaderColumn dataField='address'>Address</TableHeaderColumn>
              <TableHeaderColumn dataField='country'>Country</TableHeaderColumn>
              <TableHeaderColumn dataField='state'>State</TableHeaderColumn>
              <TableHeaderColumn dataField='city'>City</TableHeaderColumn>
              <TableHeaderColumn>Edit</TableHeaderColumn>
            </BootstrapTable>
        </main>
          )
    }
}

export default List;