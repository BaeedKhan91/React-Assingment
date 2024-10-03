import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../react layout/home'
import Login from "./../react layout/login"
import ErrorPage from '../react layout/ErrorPage'
import Layout from "../react layout/layout/layout"
import User from "../react layout/layout/user"
import Stats from "../react layout/layout/stats"
import Reports from "../react layout/layout/reports"
import RequireAuth from './protectedroutes'



function routes() {
  return (
    <Routes>
        <Route path="/"
         element={
         <Home />
         } />
        <Route path='/login'
         element={
         <Login/>
         }/>
        <Route path='/layout'
         element={
          <RequireAuth>
         <Layout/>
         </RequireAuth>
         }>
        <Route path='stats'
         element={
          <RequireAuth>
         <Stats/>
         </RequireAuth>
         }/>
        <Route path='user'
         element={
          <RequireAuth>
         <User/>
         </RequireAuth>
         }/>
        <Route path='reports' 
        element={
          <RequireAuth>
        <Reports/>
        </RequireAuth>
        }/>
        
        </Route>
        <Route path='*' element={<ErrorPage/>}/>
    </Routes>
  )
}

export default routes