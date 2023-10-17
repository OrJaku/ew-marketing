
import React, { useRef, useState, useEffect } from "react"
import Navbar from "./components/Navbar/Navbar"
import HeaderBanner from "./components/HeaderBanner/HeaderBanner"
import MiddleBanner from "./components/MiddleBanner/MiddleBanner"
import BottomBanner from "./components/BottomBanner/BottomBanner"
import HeaderContent from "./components/HeaderContent/HeaderContent"
import MiddleContent from "./components/MiddleContent/MiddleContent"
import Footer from "./components/Footer/Footer"
import { baseDimensions } from './utils/settings.js'


function App() {
  const headerContentRef = useRef(null)
  const middleBannerRef = useRef(null)
  const bottomBannerRef = useRef(null)

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
        bottomBannerRef={bottomBannerRef} />
      <HeaderBanner />
      <HeaderContent 
        isMobile={isMobile}
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
