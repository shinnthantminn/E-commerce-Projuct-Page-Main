import { useState } from 'react'
import Menu from './Menu'
import { BsCart3 } from 'react-icons/bs'
import Cart from './Cart'

function Nav({ logo, user }) {
  const [menu] = useState(['Collections', 'Men', 'Women', 'About', 'Contact'])
  const [show, setShow] = useState(false)

  return (
    <nav className="flex relative flex-wrap justify-between px-5  lg:px-0 items-center py-4 lg:py-10 lg:border-b-[1px] lg:border-gray-300">
      <div className="flex relative">
        <Menu value={menu} />
        <a href="#" className="lg:order-1 mr-10 block">
          <img src={logo} className="w-full" alt="logo" />
        </a>
      </div>
      <div className="flex items-center relative">
        <BsCart3
          className="mr-4 lg:mr-8 text-2xl duration-200 cursor-pointer text-gray-500 hover:text-black"
          onClick={() => setShow(!show)}
        />
        <div className="w-7 lg:w-12">
          <img src={user} alt="user" />
        </div>
      </div>
      <Cart toggle={show} />
    </nav>
  )
}

export default Nav
