import React from 'react'
import styled from 'styled-components'

const Produce = ({player}) => {
    return (
        <PRODUCE>
            <h1>Produce Crack</h1>
            <div className='row'>
                <input type='text'></input>
                <pre>Number of turns to use</pre>
            </div>
            <div className='row'>
                <button>Produce</button>
            </div>
        </PRODUCE>
    )
}

export default Produce

const PRODUCE = styled.div`

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