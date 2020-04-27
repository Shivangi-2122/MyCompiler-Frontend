import React, { Component } from 'react'
import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-c';
import 'prismjs/themes/prism.css'


const codem = `#include bits/stdc++.h `


class Compiler extends Component {
  state = { codem};

  

  render(){
  return (
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
  )
}
}

export default Compiler;
