import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import React, {Component} from 'react'
import Pets from './Pets'
import Navbar from './Navbar'

export default class App extends Component {
  render() {
    return (
     <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pets' element={<Pets/>}/>
      </Routes>
     </BrowserRouter>
    )
  }
}
