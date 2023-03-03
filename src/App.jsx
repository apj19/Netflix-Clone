
import './App.css'

import Navbar from './Navbar'
import Home from './Comonents/Home'
import { Route, Routes } from 'react-router-dom'
import Movies from './Comonents/Movies'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="  min-w-[375px] max-w-[1440px] bg-[#111] font-['Poppins'] ">
     
      <Navbar/>
      <Routes>
    
        <Route path='/' element={<Home/>}></Route>
        <Route path='/movie' element={<Home/>}></Route>
        <Route path='/tv' element={<Home/>}></Route>


        <Route path='/:id' element={<Movies/>}></Route>

        

      </Routes>

     



    </div>
  )
}

export default App
