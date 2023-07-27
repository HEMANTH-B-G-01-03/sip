import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "react-router-dom"
import Home from './components/Home'
import Destination from './components/Destination'
import footer from './components/footer'
import About from './components/About'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar'

function App(){
    return(
      <>
        <BrowserRouter>
        <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Destination' element={<Destination/>}/>
            <Route path='/footer' element={<footer/>}/>
          </Routes>
        </BrowserRouter>
      </>
    )
}

export default App;