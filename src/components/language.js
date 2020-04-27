import React from 'react'
import Component from 'react'
import axios from 'axios'
import Output from './Output';

const API_URL = 'https://mycompiler.cfapps.io/uploadFileToS3Bucket'
const formData = new FormData();
class Language extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            selectedLang : "",
            file :null,
            codeoutput :"",
            _showOutput:false,
            loadOuputWindow:false
        }
        this.handleUploadFile = this.handleUploadFile.bind(this);
    }
   
    componentDidMount(){

        this.setState({loadOuputWindow:true})
      }
    
    onFormSubmit = (e) =>{
        e.preventDefault();
        this.handleUploadFile(this.state.file).then((res)=>{
            console.log("Response:",res);
            this.setState({
                codeoutput:res,
                _showOutput:true
            })

        }).catch((err)=>{
            console.log("Error:",err);
           this.setState({
               codeoutput :err,
               _showOutput:true
           })
        });
        
          
        
    }

    handleUploadFile (file){
       
      
        console.log("uploadingFiles",file)
        formData.append('uploadingFiles',file)
        let axiosConfig = {
            headers: {
                'content-type': 'application/json;charset=UTF-8'
            }
          };

          return axios.post(API_URL,formData,axiosConfig )
          
    }

    render(){
     
        return(
            <React.Fragment>
                <div>
                 <form onSubmit={this.onFormSubmit}>
                <select value ={this.state.selectedLang} onChange={this.handleChange=(e)=>{this.setState({selectedLang:e.target.value})}}>
                                <option value="java">JAVA</option>
                                <option value="cpp">C++</option>
                                <option  value="c">C</option>
                                
                 </select>
                 <input type="file" onChange={this.onChange =(e)=>{ this.setState({file:e.target.files[0]})}} ></input>
                 <button type="submit">Upload File</button>
                 </form>
                 </div>
                    <Output code_output={this.state.codeoutput}></Output>
            </React.Fragment>
             
        )
    }

}
export default Language;  