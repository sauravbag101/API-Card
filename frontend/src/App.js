import React from 'react'
import MainCard from './Components/MainCard'
import AnimationCard from './Components/AnimationCard'

import Responsive from './Components/Responsive'
import PersonalProfile from './Components/Second'
import First from './Components/First'

const App = () => {
  return (
    <div className='App'>
      <First/>
      {/* <MainCard/> */}
      <PersonalProfile/>
      <AnimationCard/>
      {/* <Responsive/>   */}
       
    </div>
  )
}

export default App
