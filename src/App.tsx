/**
 * @name App
 * @description
 * @author darcrand
 */

import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Posts from './pages/Posts'

const App: React.FC = () => {
  return (
    <>
      <h1 className='text-black'>App</h1>

      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='posts' element={<Posts />} />
        </Route>
        <Route path='/about' element={<About />} />

        <Route path='*' element={<p>There's nothing here!</p>} />
      </Routes>
    </>
  )
}

export default App
