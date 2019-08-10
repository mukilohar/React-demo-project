import React, {Component, Fragment} from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import List from './List';
import Form from './Form';
import Hooks from './Hooks';


class Template extends Component {
    components = {
        List: List,
        Form: Form,
        Content: Content,
        Hooks: Hooks,
    };
    constructor(props){
        super(props);
        this.state = {currentComponent:List, edit_id:null};
        this.redirectLink = this.redirectLink.bind(this);
    }

    redirectLink(loadComponent, edit_id=null){
        this.setState({currentComponent:this.components[loadComponent], edit_id:edit_id})
        console.log(this.state)
    }
    render(){
        return (
            <Fragment>
                <Header redirectLink={this.redirectLink} />
                < this.state.currentComponent redirectLink={this.redirectLink} edit_id= {this.state.edit_id} />
                <Footer />
            </Fragment>
          )
    }
}

export default Template;