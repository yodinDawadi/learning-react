import { useState } from 'react'
import Chai from './Chai'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hello world</h1>
    <Chai/>
    </>
  )
}

export default App
