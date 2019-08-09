import React, {Component, Fragment} from 'react';
import img from '../Penguins.png';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import axios from 'axios';



class List extends Component {
  
    constructor(props){     
        super(props);
        this.options = {paginationPosition: 'top'};
        this.selectRowProp = {mode: 'checkbox', bgColor: '#ccc'};
        
        this.state = {};
        this.editStore  = this.editStore.bind(this);
        this.deleteStore  = this.deleteStore.bind(this);
        
    }
    componentDidMount() {
        axios(`http://localhost:3001/getstores`)
        .then(response => {
            let data = response.data;
            this.setState({data:data});
            console.log(data.data);
        })
  
    }
    editStore(){
      alert("edit");
    }
    deleteStore(){
      alert("delet");
    }

    render(){
        return (
        <main role="main" className="container">
            <button onClick={()=> this.props.redirectLink('Form')}>Create New</button>
            <BootstrapTable data={ this.state.data } pagination options={ this.options} selectRow={this.selectRowProp} >
              <TableHeaderColumn dataField='id' isKey>ID</TableHeaderColumn>
              <TableHeaderColumn dataField='store_name'>Store Name</TableHeaderColumn>
              <TableHeaderColumn dataField='address'>Address</TableHeaderColumn>
              <TableHeaderColumn dataField='country'>Country</TableHeaderColumn>
              <TableHeaderColumn dataField='state'>State</TableHeaderColumn>
              <TableHeaderColumn dataField='city'>City</TableHeaderColumn>
            </BootstrapTable>
        </main>
          )
    }
}

export default List;