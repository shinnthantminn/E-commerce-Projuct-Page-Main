import Nav from './Components/Menu/Nav'
import Logo from './Components/Main/Img/logo.svg'
import user from './Components/Main/Img/image-avatar.png'
import { useState, createContext } from 'react'
import Main from './Components/Main/Main'
import ImageData from './Components/Main/ImageData'

export const Context = createContext()

function App() {
  // data fro OurProject
  const [data, setData] = useState(ImageData)

  return (
    <Context.Provider
      value={{ Image: data[0].Image, thumbnail: data[0].thumbnail }}
    >
      <div className="min-h-[100vh] lg:max-w-[85%] mx-auto">
        <Nav logo={Logo} user={user} />
        <Main />
      </div>
    </Context.Provider>
  )
}

export default App
