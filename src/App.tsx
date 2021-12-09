/**
 * @name App
 * @description
 * @author darcrand
 */

import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Posts from './pages/Posts'
import PostDetail from './pages/PostDetail'

import CustomLink from './components/CustomLink'

const App: React.FC = () => {
  return (
    <>
      <h1 className='m-4 font-serif'>React App</h1>
      <CustomLink to='/'>Home</CustomLink>
      <CustomLink to='/about'>About</CustomLink>
      <hr />

      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='posts' element={<Posts />}>
            <Route path=':id' element={<PostDetail />} />
          </Route>
        </Route>
        <Route path='/about' element={<About />} />

        <Route path='*' element={<p>There's nothing here!</p>} />
      </Routes>
    </>
  )
}

export default App
