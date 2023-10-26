
import React, { useRef, useState, useEffect } from "react"
import Navbar from "./components/Navbar/Navbar"
import HeaderBanner from "./components/HeaderBanner/HeaderBanner"
import MiddleBanner from "./components/MiddleBanner/MiddleBanner"
import BottomBanner from "./components/BottomBanner/BottomBanner"
import BottomContent from "./components/BottomContent /BottomContent"
import HeaderContent from "./components/HeaderContent/HeaderContent"
import MiddleContent from "./components/MiddleContent/MiddleContent"
import Footer from "./components/Footer/Footer"
import { baseDimensions } from './utils/settings.js'


function App() {
  const headerContentRef = useRef(null)
  const middleBannerRef = useRef(null)
  const bottomBannerRef = useRef(null)
  const bottomContentRef = useRef(null)

  const [isMobile, setIsMobile] = useState(window.innerWidth <= baseDimensions.mobilPageWidthPx ? true : false)

  useEffect(() => {
    function handleWindowResize() {
      if (window.innerWidth <= baseDimensions.mobilPageWidthPx) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);


  return (
    <div>
      <Navbar
        isMobile={isMobile}
        headerContentRef={headerContentRef}
        middleBannerRef={middleBannerRef}
        bottomBannerRef={bottomBannerRef} 
        bottomContentRef={bottomContentRef}/>
      <HeaderBanner />
      <HeaderContent
        isMobile={isMobile}
        headerContentRef={headerContentRef} />
      <MiddleBanner
        isMobile={isMobile}
        middleBannerRef={middleBannerRef} />
      <MiddleContent />
      <BottomBanner
        isMobile={isMobile}
        bottomBannerRef={bottomBannerRef} />
      <BottomContent 
        isMobile={isMobile}
        bottomContentRef={bottomContentRef}/>
      <Footer />
    </div>
  )
}

export default App
