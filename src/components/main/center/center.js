import React from 'react'
import styled from 'styled-components'

const Center = ({player}) => {
    return (
        <CENTER>
            <div className='row'>
                <div className='col'>
                    <pre>You currently live in</pre>
                    <span className='bold center'>Las Vegas</span>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <span className='big underline center'>Money:</span>
                    <span className='huge center'>${player.cash}</span>
                </div>
                <div className='col'>
                    <span className='big underline center'>Turns:</span>
                    <span className='huge center'>300</span>
                </div>
            </div>
            <div className='row'>
                <pre>You have been a member of the alliance</pre>
                <span className='link'>{player.alliance}</span>
                <pre>for two weeks.</pre>
            </div>
            <div className='row'>
                <div className='col'>
                    <span className='underline center'>Whore payout:</span>
                    <div className='row'>
                        <pre>%</pre>
                        <input type='number' value={player.payout}/>
                        <button>SET</button>
                    </div>
                    <span>Whore Happiness: {player.whoreHappiness}</span>
                    <span>Thug Happiness: {player.thugHappiness}</span>
                </div>
            </div>
            <div className='row'>
                <div className='attacks'>
                    <pre>Attacks:</pre>
                    <pre>In:</pre>
                    <span className='red'>{player.attacksIn}</span>
                    <pre>Out:</pre>
                    <span className='red'>{player.attacksOut}</span>
                </div>   
            </div>
            <div className='row'>
                <div className='assets'>
                    {player.assets.map(asset => 
                        <React.Fragment>
                            <span className='purple'>{asset.name}</span>
                            <pre>{asset.value}</pre>
                        </React.Fragment>
                        )}
                </div>
            </div>
            <div className='row'>
                <button class='link'>Open Console</button>
            </div>
        </CENTER>
    )
}

export default Center

const CENTER = styled.div`
    display: flex;
    flex-direction: column;
    font-family: verdana;
    font-size: 1.3rem;
    text-align: center;

    .big {font-size: 1.6rem}
    .bold {font-weight: 700}
    .center {text-align: center}
    .huge {font-size: 1.92rem}
    .link { color: #09f}
    .red {color: #f00}
    .purple {color: #80f}
    .underline {text-decoration: underline}

    input {
        margin: 0 0.5rem;
        width: 40px;
    }
    button {
        border: none;
        background-color: transparent;
        color: #fff;
        font-weight: 700;
    }
    .row {
        display: flex;
        justify-content: center;
        margin: 0.5rem 0;
    }
    .col {
        display: flex;
        flex-direction: column;
        margin: 0 0.5rem;
        width: fit-content;
    }
    .assets {
        display: grid;
        grid-template-columns: repeat(4, auto);
        grid-gap: 0.5rem;
        width: fit-content;
        padding: 1rem 1rem;
    }
    .attacks {
        display: flex;
        span, pre {
            margin: 0 0.25rem;
        }
    }
    span {
        width: 100%;
        text-align: left;
    }
    pre {
        text-align: right;
        width: 100%;
    }
`