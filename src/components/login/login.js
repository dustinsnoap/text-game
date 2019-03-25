import React, { Component } from 'react'
import styled, { createGlobalStyle } from "styled-components"

class Login extends Component {
    constructor(props) {
        super()
        this.state = {
            usr: '',
            pwd: '',
            forgotText: 'Forgot password?',
        }
    }
    h_enter = e => {
        if(e.key === 'Enter') {
            this.h_checkStreetCred()
        }
    }
    h_updateUsername = e => {
        this.setState({usr: e.target.value})
    }
    h_updatePassword = e => {
        this.setState({pwd: e.target.value})
    }
    h_checkStreetCred = () => {
        const usr = this.state.usr
        const pwd = this.state.pwd
        localStorage.setItem('username', JSON.stringify(usr))
        localStorage.setItem('password', JSON.stringify(pwd))
        window.location.reload()
    }
    render() {
        return (
            <React.Fragment>
                <GlobalStyle />
                <LOGINWRAPPER>
                    {/* LOGO */}
                    <LOGIN >
                        <h1>Fury War</h1>
                        <h2>Crack Heads!</h2>
                        <LOGININPUT onKeyUp={this.h_enter}>
                            <label>Username:</label>
                            <input type='text' name='usr' onChange={this.h_updateUsername}/>
                            <label>Password:</label>
                            <input type='password' name='pwd' onChange={this.h_updatePassword}/>
                        </LOGININPUT>
                    </LOGIN>
                    <LOGINBUTTONS>
                        <button onClick={this.h_checkStreetCred}>LOG-IN</button>
                        <button>SIGNUP</button>
                        <button>HELP</button>
                    </LOGINBUTTONS>
                    <COPYRIGHT>Copyright © 2019 fury project</COPYRIGHT>
                </LOGINWRAPPER>
            </React.Fragment>
        )
    }
}

export default Login

const GlobalStyle = createGlobalStyle`
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
const LOGINWRAPPER = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-family: verdana;
`
const LOGIN = styled.div`
  background-color: #191919;
  border: 1px solid #333;
  padding: 0.25em 2.2em;

  h1 {
      font-size: 2.1em;
      font-weight: 700;
      margin-top: 0.25em;
      text-align: center;
  }
  h2 {
      font-size: 1.4em;
      font-weight: 700;
      margin: 1.75em 0 0.25em 0;
      text-align: center;
  }
`
const LOGININPUT = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);

  input {
      width: 75%;
      margin: 0.25em;
  }
  label {
      font-size: 1.2em;
      line-height: 2em;
  }
`
const LOGINBUTTONS = styled.div`
  margin: 0.5em 0;
  button {
      margin: 0 0.25em;
  }
`
const COPYRIGHT = styled.pre`
  color: #666;
`