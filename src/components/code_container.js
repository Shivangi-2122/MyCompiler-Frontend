import React from 'react';
import languages_list from '../constants/languages';
import default_code from '../constants/default_code';
import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-c';
import 'prismjs/themes/prism.css';
import compileRequest from '../services/compileRequest.js';
var fs = require('browserify-fs');
 export default class CodeContainer extends React.Component{
  
    constructor(props){
    
        super(props)
         this.choice={
            CODE:'code',
            FILE:'file'
        };
        this.state ={
            selectedChoice:'code',
            selectedLang : languages_list[0],
            codem:default_code[languages_list[0]],
            file :null,
            codeoutput :"",
            _showOutput:false,
            loadOuputWindow:false
        }
    console.log(this.state.selectedLang);
    }
    onSubmit=()=>{
        console.log("gdfgdfgfdgdfgfgff",this.state.selectedChoice);
        if(this.state.selectedChoice==this.choice.FILE){
                if(this.state.file==null)
                    console.log("please select a file");
                    else
               compileRequest(true,this.state.file,"",this.state.selectedLang).then((res)=>{
                    console.log("dsd",res);
                });
        }
        else{
            console.log(this.state.codem);
            if(this.state.codem=="")
                    alert("please type something");
            else{
                compileRequest(false,null,this.state.codem,this.state.selectedLang).then((res)=>{
                   console.log("res :",res);  
               }); 
            }
        }
           
    }

    render(){
        return(
            <div>
         
           <select value ={this.state.selectedLang} onChange={this.handleChangelang=(e)=>{this.setState({selectedLang:e.target.value})}}>
                        {languages_list.map((item) =><option value={item}>{item}</option> )}               
            </select>
            <Editor
                value={this.state.codem}
                onValueChange={codem => this.setState({ codem })}
                highlight={codem => highlight(codem, languages.c)}
                padding={10}
                style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 12,
                }}
             />
             <p><strong>OR SELECT FILE</strong></p>
            <input type="file" onChange={this.onChange =(e)=>{ this.setState({file:e.target.files[0]})}} ></input>
            <select value ={this.state.selectedChoice} onChange={this.handleChange=(e)=>{this.setState({selectedChoice:e.target.value})}}><option value={this.choice.CODE} selected>code</option><option value={this.choice.FILE} >file</option></select>
            <div>
            <button type='button' onClick={this.onSubmit}>Submit</button>
            </div>
            </div>
            
            
        );
    }
}