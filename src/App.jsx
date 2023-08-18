import { useState } from 'react'

import './App.css'
import { Carousal } from './components/Carousal'
import {slides} from "./data/carouselData.json"

function App() {
  return (
    <>
     <Carousal data={slides} />
    </>
  )
}

export default App
