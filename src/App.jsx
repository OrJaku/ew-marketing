
import React from "react"
import Navbar from "./components/Navbar/Navbar"
import HeaderBanner from "./components/HeaderBanner/HeaderBanner"
import MiddleBanner from "./components/MiddleBanner/MiddleBanner"
import BottomBanner from "./components/BottomBanner/BottomBanner"
import HeaderContent from "./components/HeaderContent/HeaderContent"
import MiddleContent from "./components/MiddleContent/MiddleContent"

function App() {

  return (
    <div>
      <Navbar />
      <HeaderBanner />
      <HeaderContent />
      <MiddleBanner />
      <MiddleContent />
      <BottomBanner />
    </div>
  )
}

export default App
