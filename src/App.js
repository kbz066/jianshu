import React, { Component } from 'react';
import { GlobalStyle } from './style.js';
import { IconFont } from "./iconfont/iconfont"
import Header from './common/header/index'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home/index'
import Detail from './pages/detail/index'
import Login from './pages/login/index'
import store from './store/index'
import { Provider } from 'react-redux'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <GlobalStyle />
            <IconFont />
            <Header />
            <Route path='/' exact component={Home}></Route>
            <Route path='/login' exact component={Login}></Route>

            <Route path='/detail/:id' exact component={Detail}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}


export default App;
