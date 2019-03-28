import React, { Component } from 'react'
import styled from 'styled-components'

const Center = ({player}) => {
    return (
        <CENTER>
            <div className='location'>
                <h3>You currently live in</h3>
                <span>{player.city}.</span>
            </div>
            <div className='cash-turns'>
                <div className='cash'>
                    <h3>Money:</h3>
                    <span>{player.cash}</span>
                </div>
            </div>
        </CENTER>
    )
}

export default Center

const CENTER = styled.div`

`