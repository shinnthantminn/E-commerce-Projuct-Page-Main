import React from 'react'
import Content from './Content'
import ImageContainer from './ImageContainer'

function Main() {
  return (
    <div className=" grid grid-cols-12">
      <div className=" col-span-6">
        <ImageContainer />
      </div>
      <div className="col-span-6">
        <Content />
      </div>
    </div>
  )
}

export default Main
