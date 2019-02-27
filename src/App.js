import React, { Component } from 'react';
import {GlobalStyle} from'./style.js';
import {IconFont} from "./iconfont/iconfont"
import Header from './common/header/index'


class App extends Component {
  render() {
    return (
      <div >
        <GlobalStyle/>
        <IconFont/>
        
        <Header/>
      </div>
    );
  }
}

export default App;
