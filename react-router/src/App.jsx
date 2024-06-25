import {Routes,Route,Link} from 'react-router-dom';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Contact from "./components/Contact"
import About from "./components/About"

function App() {

  return (
    <>
     <Navbar/>
    <Routes>
      <Route exact path="/home" Component={Home}/>
      <Route exact path="/contact" Component={Contact}/>
      <Route exact path="/about" Component={About}/>
    </Routes>
    </>
  )
}

export default App
