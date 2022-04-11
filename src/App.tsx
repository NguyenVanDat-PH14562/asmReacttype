import { useEffect, useState } from 'react'
import './App.css'
import {Routes,Route} from "react-router-dom"
import List from "../src/page/List";
import Add from "../src/page/Add";
import Edit from "../src/page/Edit";

import { ProductType } from './type/Products'
import { list ,remove,add,update} from './api/product'
import AdminLayout from './page/layout/AdminLayout';
import Websitelayout from './page/layout/Websitelayout';

function App() {
  const [products,setProducts] = useState<ProductType[]>([])
// call API
  useEffect(()=>{
      const getProducts = async ()=>{
   const {data}= await list();
     setProducts(data);
      }
      getProducts();
  },[])
  // xóa
  const onHandleremove = async (id: number) => {
    remove(id)
    setProducts(products.filter(item => item._id !== id));
  }  
  // thêm sp
  const onhandlerAdd = async(product:any)=>{
    const {data} = await add (product)
    setProducts([...products,data])
  }
  // cập nhật sp
  const onhanderUpdate = async (product:ProductType)=>{
    try {
      const {data} = await update (product);
      setProducts(products.map(item => item._id === data._id ? product : item))
    } catch (error) {        
    }
}
  return (
    <div className="App">
      
         <Routes>
                   <Route path='/list'  element={<List products={products} onRemove={onHandleremove}/>}/>
                   <Route path='/add' element={< Add name='dat' onAdd={onhandlerAdd}/>} />
                   <Route path='/products/:id/edit' element={<Edit onUpdate={onhanderUpdate}/>} />
                   <Route path='/admin' element={<AdminLayout/>} />
                   <Route path='/' element={<Websitelayout/>} />



         </Routes>
    </div>
  )
}

export default App
