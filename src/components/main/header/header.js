import React, { Component } from 'react'
import styled from 'styled-components'

class Header extends Component {
    constructor(props) {
        super()
        this.state = {
            username: '',
            id: 1042,
            rank: '7',
            networth: '1,967,781,500',
            title: 'HELL HATH NO'
        }
    }
    componentDidMount() {
        const username = JSON.parse(localStorage.getItem('username'))
        if(username) this.setState({username: username})
    }
    render() {
        return (
            <HEADER>
                <h1>Main Menu</h1>
                <h2>{this.state.username} <span className='purple'>(#</span>{this.state.id}<span className='purple'>)</span></h2>
                <p><span className='purple'>Ranked</span> {this.state.rank}</p>
                <p><span className='purple'>Yo pimp ass is worth</span> ${this.state.networth}</p>
                <p><span className='yellow'>"</span>{this.state.title}<span className='yellow'>"</span></p>
            </HEADER>
        )
    }
}

export default Header

const HEADER = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .purple {color: #93f}
    .yellow {color: #ff0}

    h1 {
        font-family: 'Lobster', arial, serif;
        font-size: 2.4rem;
    }
    h2 {
        font-size: 1.8rem;
    }
    p {
        font-size: 1.3rem;
    }
`