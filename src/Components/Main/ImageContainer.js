import { useContext, useEffect, useState } from 'react'
import { Context } from '../../App'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image'
import LargestScreen from './LargestScreen'
import SmallScreen from './SmallScreen'

function ImageContainer() {
  let Image = useContext(Context)

  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newHeight = window.innerWidth
      setWidth(newHeight)
    }

    window.addEventListener('resize', updateWindowDimensions)

    return () => window.removeEventListener('resize', updateWindowDimensions)
  }, [])

  console.log(width < 1023, width)

  if (width < 1023) return <SmallScreen Image={Image} />
  else return <LargestScreen Image={Image} />
}

export default ImageContainer
