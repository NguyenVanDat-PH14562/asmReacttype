import React from 'react'
import Banner from '../../compents/banner'
import Footer from '../../compents/Footer'
import Header from '../../compents/Header'
import Main from '../../compents/Main'
import { ProductType } from '../../type/Products'
type Props = {
    products:ProductType[];
}

const Websitelayout = ({products}:Props) => {
    return (
        <div>
            <Header/>
           

            <Main products={products}/>
            
            <Footer/>
        </div>
    )
}

export default Websitelayout