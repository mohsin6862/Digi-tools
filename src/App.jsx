import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import { ToastContainer } from 'react-toastify'
import Showcase from './Components/Showcase/Showcase'
import DigitalTools from './Components/DigitalTools/DigitalTools'
import { Suspense } from 'react'

function App() {
const productsPromise = fetch('/public/products.json')
.then(res=> res.json())
  return (
    <>
     <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Banner></Banner>
     </div>
     <Showcase></Showcase>
     <div className='max-w-7xl mx-auto'>
      <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
        <DigitalTools productsPromise={productsPromise}></DigitalTools>
      </Suspense>
     </div>
     <ToastContainer></ToastContainer>
    </>
  )
}

export default App
