import React from 'react'
import Navbar from './Components/Navbar'
import Cards from './Components/Cards'
import Pagination from './Components/Pagination'

function App() {
  return (
    <div className='bg-blue-200'>
    <Navbar />
    <Cards />
    <Pagination />
  </div>
  
  )
}

export default App