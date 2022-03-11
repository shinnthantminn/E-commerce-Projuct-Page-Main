import { useState } from 'react'

function LargestScreen({ Image }) {
  const [state, setState] = useState({
    active: 0,
  })

  const active = state.active

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
                state.active === index ? 'imgContainer activer' : 'imgContainer'
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
                }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default LargestScreen
