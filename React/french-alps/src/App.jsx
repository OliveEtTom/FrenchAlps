import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
//import './App.css'

import Banner from "./components/Banner/Banner"
import DestinationList from './components/DestinationList/DestinationList'

const App = () => {
  return (
    <div>
      <Banner />
      <DestinationList />
    </div>
  )
}
export default App