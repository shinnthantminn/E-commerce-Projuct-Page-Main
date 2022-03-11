import { useContext, useEffect, useState } from 'react'
import { Context } from '../../App'

function ImageContainer() {
  let Image = useContext(Context)
  const [state, setState] = useState({
    active: 0,
  })
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newHeight = window.innerWidth
      setHeight(newHeight)
      console.log('updating height')
    }

    window.addEventListener('resize', updateWindowDimensions)

    return () => window.removeEventListener('resize', updateWindowDimensions)
  }, [])

  const active = state.active

  // 1023

  return (
    <div className="flex flex-col items-center pt-20 space-y-10">
      <div>
        <img
          src={Image.Image[active]}
          className="w-[29rem] rounded-lg"
          alt=""
        />
      </div>
      <div className="flex space-x-7">
        {Image.thumbnail.map((photo, index) => {
          return (
            <div
              className={
                state.active === index ? 'imgContainer active' : 'imgContainer'
              }
              key={index}
            >
              <img
                className=" w-20 rounded-lg"
                data-index={index}
                key={index}
                src={photo}
                alt=""
                onClick={(e) => {
                  setState({ active: +e.target.dataset.index })
                  console.log(index)
                }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ImageContainer
