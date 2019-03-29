import React from 'react'
import styled from 'styled-components'

const Scout = ({player}) => {
    return (
        <SCOUT>
            <h1>Scout for Whores</h1>
            <div className='row'>
                <input type='text'></input>
                <pre>Number of turns to use</pre>
            </div>
            <div className='row'>
                <select>
                    <option value='1'>Casino District</option>
                    <option value='2'>Wino</option>
                    <option value='3'>Low Rent District</option>
                    <option value='4'>Nightclub District</option>
                    <option value='5'>Urban Ghetto</option>
                </select>
                <pre>Neighborhood to scout in</pre>
            </div>
            <div className='row'>
                <button>Scout</button>
            </div>
        </SCOUT>
    )
}

export default Scout

const SCOUT = styled.div`

    h1 {
        font-family: Lobster;
        font-size: 2.4rem;
        text-align: center;
    }
    .row {
        display: flex;
        font-size: 1.3rem;
        align-items: center;
        justify-content: center;
        margin: 0.5rem;
        * {
            margin: 0 0.5rem;
        }
    }
    select, input {
        text-align: center;
        width: 125px;
    }
    pre {
        width: 125px;
    }
`