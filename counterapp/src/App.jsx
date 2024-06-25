import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")
  const addValue = ()=>{
    if(count<20){
      setCount(count+1)
    }
    
  }
  const removeValue = ()=>{
    if(count>0){
      setCount(count-1)
    }
     
  }

  return (
    <>
  <h1>{count}</h1>
  <h1>{text}</h1>
  <input type="text" onChange={(e)=>setText(e.target.value)} placeholder='enter some text here' />
  <button onClick={addValue}>Add Value</button>
  <button onClick={removeValue}>Remove Value</button>
  <button onClick={()=> setCount(0)}>Reset</button>
    </>
  )
}

export default App
