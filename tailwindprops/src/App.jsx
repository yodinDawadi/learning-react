import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="h-screen flex items-center justify-center flex-wrap">
<Card imgSrc="" name="Yodin dawadi"/>
<Card imgSrc="" name="Dil kumari"/>
<Card imgSrc="" name="Pinky"/>
<Card imgSrc="" name="Ful kuamri"/>
<Card imgSrc="" name="heroniii"/>
<Card imgSrc="" name="rand"/>
<Card imgSrc="" name="heroniii"/>
<Card imgSrc="" name="heroniii"/>
<Card imgSrc="" name="heroniii"/>
<Card imgSrc="" name="heroniii"/>
    </div>

    </>
  )
}

export default App
