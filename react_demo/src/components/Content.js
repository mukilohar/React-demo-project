import React, {Component, Fragment} from 'react';
import img from '../Penguins.png';

class Content extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loadFiles = this.loadFiles.bind(this);
        this.removeImage = this.removeImage.bind(this);        
        this.input = React.createRef();
        this.fileInput = React.createRef();
        this.state = {file: []}
      
    }
    handleSubmit() {
        alert('form subitted : '+this.input.current.value);
    }
    loadFiles() {
        var files = this.fileInput.current.files;
        var arr=this.state.file;
        for(var i=0; i< files.length; i++) {
            arr.push(URL.createObjectURL(files[i]));
        }
        this.setState({file:arr});
        this.fileInput.current.files=null;
    }
    removeImage(i){
        var arr =this.state.file;
        arr.splice(i,1);
        this.setState({file:arr});
    }
    render(){
        return (
        <main role="main" className="container">
            <form onSubmit={this.handleSubmit} className="mt-5">
            <div className="form-group">
                <input type="text" ref= {this.input} defaultValue="john" className="form-control" />
            </div>
            <div className="form-group">
                <input type="file" ref={this.fileInput} multiple className="form-control" onChange={this.loadFiles} />
            </div>
            <div className="form-group">
                <input type="submit" value="Submit" />
            </div>
            </form>
            {
                this.state.file.map((file, i ) => 
                    <div class="img-container">
                        <span onClick={()=>this.removeImage(i)}>x</span>
                        <img src={file}  className="img-thumbnail"/>
                    </div>
                )
            }
        </main>
          )
    }
}

export default Content;