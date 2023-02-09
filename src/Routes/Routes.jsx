import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Issue_Details from '../Pages/Issue_Details'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/:number" element={<Issue_Details/>} />
    </Routes>
  )
}

export default Router