import React from 'react'
import FacebookLogin from '../Components/FacebookLogin/FacebookLogin'
import FacebookText from '../Components/FacebookText/FacebookText'
import "./Home.scss"

function Home() {
  return (
    <div className='pages'>
    <FacebookText/>
    <FacebookLogin/>
    </div>
  )
}

export default Home