import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import BmiCalculator from './components/BmiCalculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <BmiCalculator/>
    </>
  )
}

export default App
