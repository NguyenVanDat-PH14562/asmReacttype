import React from 'react'
import Listproduct from '../page/Listproduct'
import { ProductType } from '../type/Products'
import Footer from './Footer';
import Header from './Header';

type Props = {
    products:ProductType[];
}

const Products = ({products}: Props) => {
  return (
    <div>
      <Header/>
     <Listproduct products={products}/>
     <Footer/>

    </div>
  )
}

export default Products