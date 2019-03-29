import React from 'react'
import styled from 'styled-components'

const Header = ({player}) => {
    return (
        <HEADER>
            <h1>Main Menu</h1>
            <h2>{player.username} <span className='purple'>(#</span>{player.id}<span className='purple'>)</span></h2>
            <p><span className='purple'>Ranked</span> {player.rank}</p>
            <p><span className='purple'>Yo pimp ass is worth</span> ${player.networth}</p>
            <p><span className='yellow'>"</span>{player.title}<span className='yellow'>"</span></p>
        </HEADER>
    )
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