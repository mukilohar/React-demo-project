import React, {Component, Fragment} from 'react';
import img from '../Penguins.png';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import axios from 'axios';



class Form extends Component {
  
    constructor(props){     
        super(props);
        this.state={store_name:'',address:'',country:'', state:'', city:''}
        this.handleSubmit=this.handleSubmit.bind(this);   
        this.handleInputChange=this.handleInputChange.bind(this);   
             
    }

    handleSubmit(e){
        axios({
            method: 'post',
            url: 'http://localhost:3001/createStore',
            data: this.state,            
            headers: {'Content-Type': 'application/json'}
          })
          .then(response => {          
            this.props.redirectLink('List');
          });

        e.preventDefault();
    }
    handleInputChange(e){
        this.setState({[e.target.name] : e.target.value});
    }
   
    render(){
        return (
            <main role="main" className="container">
                <h2>Enter Details for Stores</h2>
                {this.props.edit_id}
                <form onSubmit={this.handleSubmit} >
                    <div class="row">
                    <div class="col-sm-6">
                    <div class="form-group">
                        <label>Store Name :</label>
                        <input type="text" class="form-control" name="store_name" onChange={this.handleInputChange} value={this.state.store_name}/>
                    </div>
                    
                    <div class="form-group">
                        <label>Country :</label>
                        <input type="text" class="form-control" name="country" onChange={this.handleInputChange} value={this.state.country} />
                    </div>
                    </div>
                    <div class="col-sm-6">
                    <div class="form-group">
                        <label>State :</label>
                        <input type="text" class="form-control" name="state" onChange={this.handleInputChange} value={this.state.state} />
                    </div>
                    <div class="form-group">
                        <label>City :</label>
                        <input type="text" class="form-control" name="city" onChange={this.handleInputChange} value={this.state.city} />
                    </div>
                    </div></div>
                    <div class="form-group">
                        <label>Address :</label>
                        <textarea class="form-control" name="address" onChange={this.handleInputChange}>{this.state.address}</textarea>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="form-control" />
                    </div>
                </form>
            </main>
          )
    }
}

export default Form;