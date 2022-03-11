import Nav from './Components/Menu/Nav'
import Logo from './Img/logo.svg'
import user from './Img/image-avatar.png'
import { useState } from 'react'
import Main from './Components/Main/Main'

function App() {
  // data fro OurProject
  const [data, setData] = useState()

  return (
    <div className="min-h-[100vh] lg:max-w-[85%] mx-auto">
      <Nav logo={Logo} user={user} />
      <Main />
    </div>
  )
}

export default App
