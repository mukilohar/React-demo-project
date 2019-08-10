import React, {Component} from 'react';
import logo from '../logo.svg';

class Header extends Component {
    // constructor(props){super(props);}
    render(){
        return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
              <img src={logo} width="50px" />
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#" onClick={()=> this.props.redirectLink('Content')}>Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" onClick={()=> this.props.redirectLink('List')}>Stores</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#" onClick={()=> this.props.redirectLink('Hooks')}>Hooks</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#" onClick={()=> this.props.redirectLink('HOC')}>HOC</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#" onClick={()=> this.props.redirectLink('Context')}>Context</a>
                  </li>
                  
                </ul>
                <form className="form-inline mt-2 mt-md-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
              </div>
            </nav>
          </header>
          )
    }
}

export default Header;