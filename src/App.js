import React, { Component } from 'react';
import {GlobalStyle} from'./style.js';
import {IconFont} from "./iconfont/iconfont"
import Header from './common/header/index'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './pages/home/index'


class App extends Component {
  render() {
    return (
      <div >
        <GlobalStyle/>
        <IconFont/>
        <Header/>
        <BrowserRouter>
          <Switch>
         
            <Route exact path="/" component={Home}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
