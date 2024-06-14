import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar'
import Cards from './Components/Cards'
import Detail from './Components/Detail'
import Search from './Components/Search';


function App() {
  return (
    <div className='bg-blue-200'>
    <Router>
    <Navbar/>

      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/search" element={<Search/>} />
      </Routes>
    </Router>
  </div>
  
  )
}

export default App