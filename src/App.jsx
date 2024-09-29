import React, { useState } from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Button from './button/button'
import Calculator from './calculator/Calculatorreact'
// import Layout from './react layout/layout'
import Routeslayout from './route/routes'
// import './App.css'

function App() {
 

  return (
    <>
    {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} >
      <Route path='/calculator' element={<Calculator/>}/>
      <Route path='/button' element={<Button/>}/>
      </Route>

      
    </Routes>
    </BrowserRouter> */}
      {/* <Route path='link1' element={<Link1/>}/> */}
      {/* <Calculator/> */}
      <BrowserRouter>
      <Routeslayout/>
      </BrowserRouter>

    </>
  )
}

export default App
