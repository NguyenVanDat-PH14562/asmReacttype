import React from 'react'
import Listproduct from '../page/Listproduct'
import { ProductType } from '../type/Products'

type Props = {
    products:ProductType[];
}

const Main = ({products}: Props) => {
  return (
    <main>
    <h1 className='text-3xl text-red-600/100 italic'>Sản Phẩm nổi bật</h1>
    <hr />
    <br />
     <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
      <Listproduct products={products}/>
     </div>
     <br />
     <hr />
 </main>
  )
}

export default Main