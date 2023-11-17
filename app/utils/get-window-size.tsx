"use client"
import { useEffect, useState } from "react"

function useWindowSize() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }
    // window.addEventListener("resize", handleResize)

    handleResize()

    // return () => window.removeEventListener("resize", handleResize)
  }, [])
  return width
}

export default function isMobileSize() {
  const minimumWidth = 640
  const isMobile: boolean = useWindowSize() < minimumWidth

  return isMobile
}
