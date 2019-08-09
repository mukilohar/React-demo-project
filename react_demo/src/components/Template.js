import React, {Component, Fragment} from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import List from './List';
import Form from './Form';

class Template extends Component {
    components = {
        List: List,
        Form: Form,
        Content: Content,
    };
    constructor(props){
        super(props);
        this.state = {currentComponent:Form};
        this.redirectLink = this.redirectLink.bind(this);
    }

    redirectLink(loadComponent){
        this.setState({currentComponent:this.components[loadComponent]})
        console.log(this.state)
    }
    render(){
        return (
            <Fragment>
                <Header redirectLink={this.redirectLink} />
                < this.state.currentComponent redirectLink={this.redirectLink} />
                <Footer />
            </Fragment>
          )
    }
}

export default Template;