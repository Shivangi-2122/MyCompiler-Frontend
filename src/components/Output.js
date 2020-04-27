import React from 'react';
import  Component from 'react'
import './output.css'

class Output extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="output-window">
                {this.props.code_output}
            </div>
        )
    }
}
export default Output