import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../react layout/home'
import Login from "./../react layout/login"
import ErrorPage from '../react layout/ErrorPage'
import Layout from "../react layout/layout/layout"
import User from "../react layout/layout/user"
import Stats from "../react layout/layout/stats"
import Reports from "../react layout/layout/reports"



function routes() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/layout' element={<Layout/>}>
        <Route path='stats' element={<Stats/>}/>
        <Route path='user' element={<User/>}/>
        <Route path='reports' element={<Reports/>}/>
        
        </Route>
        <Route path='*' element={<ErrorPage/>}/>
    </Routes>
  )
}

export default routes