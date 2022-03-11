import React from 'react'
import { BsPlusLg } from 'react-icons/bs'
import { FaMinus } from 'react-icons/fa'
import { BsCart3 } from 'react-icons/bs'

function CounterBtn() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex space-x-14 justify-between lg:justify-start px-4 py-4 rounded-lg bg-[hsl(223,_64%,_98%)]">
        <button className="text-orange-500 font-bold">
          <FaMinus />
        </button>
        <p>0</p>
        <button className="text-orange-500 font-bold">
          <BsPlusLg />
        </button>
      </div>

      <button className="btn justify-center h-[3.6rem] lg:h-[52px] mt-3 lg:mt-0 after:content-[''] after:w-full after:absolute after:top-0 after:left-0 after:h-full after:bg-inherit after:rounded-lg after:z-[-1] hover:after:scale-[1.2] hover:after:opacity-0 hover:after:duration-200 after:duration-200 duration-200 hover:opacity-[0.5] hover:translate-y-[-5px] hover:shadow-[3px_20px_40px_rgb(255_125_26_/_30%)]">
        <BsCart3 />
        <span>Add To Cart</span>
      </button>
    </div>
  )
}

export default CounterBtn
