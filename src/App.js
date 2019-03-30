import React, { Component } from 'react'
import authenticate from './components/authentication/authentication'
import { createGlobalStyle } from "styled-components"
import './reset.css'

// import Main from './components/main/main'
// import Scout from './components/actions/scout'
import Produce from './components/actions/produce'

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        {/* <Main /> */}
        {/* <Scout /> */}
        <Produce />
      </div>
    );
  }
}

export default authenticate(App);

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lobster');
  #root {
    align-items: center;
    background-color: #000;
    color: #fff;
    display: flex;
    font-size: 10px;
    height: 100vh;
    justify-content: center;
    width: 100vw;
  }
`
