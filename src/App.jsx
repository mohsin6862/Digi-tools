import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
     <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
     </div>
     <ToastContainer></ToastContainer>
    </>
  )
}

export default App
