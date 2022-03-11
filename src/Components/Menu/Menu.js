import { BiMenu } from 'react-icons/bi'
import { useState } from 'react'
import { IoCloseSharp } from 'react-icons/io5'

const Menu = ({ value }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex lg:order-2 ">
      <BiMenu
        className="text-2xl lg:hidden mr-4"
        onClick={() => setOpen(true)}
      />
      <ul
        className={`menu lg:translate-x-0 ${
          !open ? 'translate-x-[-1000px]' : 'translate-x-0'
        }`}
      >
        <IoCloseSharp
          className="lg:hidden text-2xl mb-7"
          onClick={() => setOpen(false)}
        />
        {value.map((i, index) => (
          <li
            key={index}
            className="relative text-left after:absolute after:duration-300 font-[600] lg:font-[400] hover:after:scale-x-[100%] after:scale-x-0 after:content-[''] after: after:w-full after:h-[4px] after:bg-orange-500 after:left-[0px] after:bottom-[-3.3em]"
          >
            <a href="#">{i}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Menu
