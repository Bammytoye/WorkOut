import { Routes, Route } from "react-router-dom";

// Components and Pages
import Home from './Pages/Home'
import Navbar from "./Component/Navbar";
import Login from './Pages/Login'
import SignUp from './Pages/SignUp' 


function App() {

  return (
    <div className="App">   
      <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/home" element= {<Home />}></Route>
            <Route path="/login" element= {<Login />}></Route>
            <Route path="/signup" element= {<SignUp />}></Route>
          </Routes>
        </div>
    </div>
  )
}

export default App
