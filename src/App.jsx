import { useState } from 'react'
import './App.css'
import  Nav  from './components/Nav.jsx'
function App() {
  const [color, setColor] = useState("olive");
  
  return (
    <>
    <div className='w-full p-2 flex justify-center flex-wrap'>
     <Nav />
     </div>
    </>
  )
}

export default App
