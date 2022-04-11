import React from 'react'
import Footer from '../../compents/Footer'
import Header from '../../compents/header'
import Main from '../../compents/Main'

type Props = {}

const Websitelayout = (props: Props) => {
    return (
        <div>
            <Header/>

            <Main/>
            
            <Footer/>
        </div>
    )
}

export default Websitelayout