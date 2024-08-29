import About from "./Components/About"
import Contact from "./Components/Contact"
import Course from "./Components/Course"
import Home from "./Components/Home"
import {Routes,Route} from 'react-router-dom'
import Signup from "./Components/Signup"

function App() {

  return (
    <>
     <Routes>
      <Route path ='/' element={<Home/>} ></Route>
      <Route path = '/course' element={<Course/>}></Route>
      <Route path = '/signup' element={<Signup/>}></Route>
      <Route path = '/contact' element={<Contact/>}></Route>
      <Route path = '/about' element={<About/>}></Route>
     </Routes>
    </>
  )
}

export default App
