import { useEffect, useState } from 'react'

enum tailWidthValue {
  sm = 640,
  md = 768,
  lg = 1024,
  xl = 1280,
  xxl = 1536,
}

function useScreenWidth() {
  const [windowSize, setWindowSize] = useState({
    sm: false,
    md: false,
    lg: false,
    xl: false,
    xxl: false,
  })

  useEffect(() => {
    const changeWindowSize = () => {
      const currentWidth = window.innerWidth
      if (tailWidthValue.sm > currentWidth) {
        setWindowSize({ sm: false, md: false, lg: false, xl: false, xxl: false })
      } else if (tailWidthValue.xxl <= currentWidth) {
        setWindowSize({ sm: true, md: true, lg: true, xl: true, xxl: true })
      } else if (tailWidthValue.xl <= currentWidth) {
        setWindowSize({ sm: true, md: true, lg: true, xl: true, xxl: false })
      } else if (tailWidthValue.lg <= currentWidth) {
        setWindowSize({ sm: true, md: true, lg: true, xl: false, xxl: false })
      } else if (tailWidthValue.md <= currentWidth) {
        setWindowSize({ sm: true, md: true, lg: false, xl: false, xxl: false })
      } else if (tailWidthValue.sm <= currentWidth) {
        setWindowSize({ sm: true, md: false, lg: false, xl: false, xxl: false })
      }
    }

    window.addEventListener('resize', changeWindowSize)
    changeWindowSize()

    return () => {
      window.removeEventListener('resize', changeWindowSize)
    }
  }, [])

  return windowSize
}

export default useScreenWidth
