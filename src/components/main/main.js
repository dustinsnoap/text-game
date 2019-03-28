import React, { Component } from 'react'
// import styled from 'styled-components'
import Header from './header/header'
import Center from './center/center'

class Main extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            id: 1042,
            rank: '7',
            networth: '1,967,781,500',
            title: 'HELL HATH NO',
            city: 'Las Vegas',
        }
    }
    componentDidMount() {
        const username = JSON.parse(localStorage.getItem('username'))
        if(username) this.setState({username: username})
    }
    render() {
        return (
            <div>
                <Header player={this.state}/>
                <Center player={this.state}/>
            </div>
        )
    }
}

export default Main