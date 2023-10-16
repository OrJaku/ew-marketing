
import React, { useRef } from "react"
import Navbar from "./components/Navbar/Navbar"
import HeaderBanner from "./components/HeaderBanner/HeaderBanner"
import MiddleBanner from "./components/MiddleBanner/MiddleBanner"
import BottomBanner from "./components/BottomBanner/BottomBanner"
import HeaderContent from "./components/HeaderContent/HeaderContent"
import MiddleContent from "./components/MiddleContent/MiddleContent"
import Footer from "./components/Footer/Footer"

function App() {
  const headerContentRef = useRef(null)
  const middleBannerRef = useRef(null)
  const bottomBannerRef = useRef(null)


  return (
    <div>
      <Navbar
        headerContentRef={headerContentRef}
        middleBannerRef={middleBannerRef}
        bottomBannerRef={bottomBannerRef} />
      <HeaderBanner />
      <HeaderContent 
        headerContentRef={headerContentRef}/>
      <MiddleBanner
        middleBannerRef={middleBannerRef} />
      <MiddleContent />
      <BottomBanner
        bottomBannerRef={bottomBannerRef} />
      <Footer />
    </div>
  )
}

export default App
