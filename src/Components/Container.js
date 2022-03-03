import React from 'react'
import './Container.css'
import MainContainer from './MainContainer'
import TopContainer from './TopContainer'

function Container() {
  return (
    <div className="container">
       <TopContainer />
       <MainContainer />
    </div>
  )
}

export default Container