import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
     <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Banner></Banner>
     </div>
     <ToastContainer></ToastContainer>
    </>
  )
}

export default App
