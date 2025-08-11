import React from 'react'
import TheameTogle from './Components/TheameTogle'
import Background from './Components/Background'
import { Navbar } from './Components/Navbar'

function Home() {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden '> 

    {/* theme toggle  */}
    <TheameTogle></TheameTogle>

    {/* backgrund effects  */}
    <Background></Background>

    {/* navbar  */}
    <Navbar></Navbar>

    {/* main contect  */}

    {/* footer  */}

    </div>
  )
}

export default Home