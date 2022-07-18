import React, {useEffect, useState} from 'react'
import { BrowserRouter } from "react-router-dom";
import { getProducts, doPostPro } from "./Services/backend"

import Aside from './components/Asides/aside'
import Content from "./components/Content/content";
import Auth from  './components/Auth/auth'

export default function App() {

  const [token, setToken] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [products, setProducts] = useState([])

  useEffect(()=>{
    const tok = localStorage.getItem('token')
    setToken(tok)
    getProduct()

  }, [])

  async function getProduct() {
    let a = await getProducts('praducts')
    setProducts(a)
  }

  function showToggleForm(){
    setShowForm(prev=>!prev)
  }

  

  return (
    <BrowserRouter>
      {token ? <div className="row p-0 m-0">
        <div className='col-12 col-md-3  p-0 m-0'>
          <Aside />
        </div>
        <div className='col-12 col-md-9 p-0 m-0'>
          <Content showForm={showForm} showToggleForm={showToggleForm} products={products} doPostPro={doPostPro}/>
        </div>
      </div> : <Auth />}
    </BrowserRouter>
  )
}