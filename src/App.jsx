import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import { ToastContainer } from 'react-toastify'
import Showcase from './Components/Showcase/Showcase'
import DigitalTools from './Components/DigitalTools/DigitalTools'
import { Suspense, useState } from 'react'
import GetStarted from './Components/GetStarted/GetStarted'
import Pricing from './Components/Pricing/Pricing'
import Transform from './Components/Transform/Transform'
import Footer from './Components/Footer/Footer'

function App() {
const productsPromise = fetch('products.json')
.then(res=> res.json())
 const [cart,setCart]=useState([]);
  return (
    <>
     <div className='max-w-7xl mx-auto'>
      <Navbar cart={cart} ></Navbar>
      <Banner></Banner>
     </div>
     <Showcase></Showcase>
     <div className='max-w-7xl mx-auto'>
      <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
        <DigitalTools productsPromise={productsPromise} cart={cart} setCart={setCart}></DigitalTools>
      </Suspense>
      <GetStarted></GetStarted>
      <Pricing></Pricing>
     </div>
     <Transform></Transform>
     <Footer></Footer>
     <ToastContainer></ToastContainer>
    </>
  )
}

export default App
