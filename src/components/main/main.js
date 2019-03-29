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
            alliance: 'allyname',
            rank: '7',
            networth: '1,967,781,500',
            title: 'HELL HATH NO',
            city: 'Las Vegas',
            cash: 1333337,
            turns: 300,
            payout: 1,
            whoreHappiness: 100,
            thugHappiness: 100,
            attacksIn: 0,
            attacksOut: 0,
            assets: [
                {name: 'Whores', value: 236281},
                {name: 'Thugs', value: 46124162},
                {name: 'Condoms', value: 2362812},
                {name: 'Weapons', value: 0},
                {name: 'Crack', value: 462462},
                {name: 'Beer', value: 46124162},
                {name: 'Medicine', value: 240000},
                {name: 'Low-riders', value: 1},
                {name: 'Pistols', value: 0},
                {name: 'Shotguns', value: 0},
                {name: 'MP5s', value: 0},
                {name: 'AK-47s', value: 0}
            ]
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