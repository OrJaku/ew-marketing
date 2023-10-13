
import React from "react"
import Navbar from "./components/Navbar/Navbar"
import HeaderBanner from "./components/HeaderBanner/HeaderBanner"
import MiddleBanner from "./components/MiddleBanner/MiddleBanner"
import BottomBanner from "./components/BottomBanner/BottomBanner"

function App() {

  return (
    <div>
      <Navbar />
      <HeaderBanner />
      <div style={{height: 300}}></div>
      <MiddleBanner />
      <div style={{height: 150}}></div>
      <BottomBanner />
    </div>
  )
}

export default App
