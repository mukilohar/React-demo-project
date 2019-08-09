import React, {Component, Fragment} from 'react';
import img from '../Penguins.png';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import axios from 'axios';



class List extends Component {
  
    constructor(props){     
        super(props);
        this.options = {
                        paginationPosition: 'top',
                        onRowClick:(row)=>{
                          this.props.redirectLink('Form', row.id);
                        }
                      };
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
        this.state = {selected:[]};
        this.handleSubmit  = this.handleSubmit.bind(this);
        this.deleteStore  = this.deleteStore.bind(this);
        
    }
    componentDidMount() {
        axios(`http://localhost:3001/getstores`)
        .then(response => {
            let data = response.data;
            this.setState({data:data});
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
          let data = response.data;
          this.setState({data:data});
        })
    }
    deleteStore(){
      alert("delet");
    }

    render(){
        return (
        <main role="main" className="container">
            <button onClick={()=> this.props.redirectLink('Form')}>Create New</button>
            <button onClick={()=> this.handleSubmit('delete')} >Delete</button>
            <BootstrapTable data={ this.state.data } pagination options={ this.options} selectRow={this.selectRowProp} >
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