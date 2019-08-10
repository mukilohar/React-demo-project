import React, {Component} from 'react';

function hocCreate(ComponentName, Method) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state={data:[]}
        }

        componentDidMount() {
           alert('component mounted'+Method);
          }     
        //   componentDidCatch(error, info) {
        //     // You can also log the error to an error reporting service
        //     logErrorToMyService(error, info);
        //   }
        

        render(){
            return <ComponentName />;
        }
    }
}

const Hooks = hocCreate('DataDef', (method)=> 'hello' );

export default Hooks;