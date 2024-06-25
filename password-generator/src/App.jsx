import { useState,useCallback,useEffect,useRef } from "react"

function App() {
  const [length,setLength]=useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [symbolAllowed, setSymbolAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const genBtnRef = useRef(null)
  const cpyBtn = useRef(null)
  const passRef = useRef(null)
  const passwordGenerator = useEffect(()=>{
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    const number ="1234567890"
    const smbl ="!@#$%^&*()_+-~][}{/?><"

    if(numberAllowed){
      str += number;
    }
    if(symbolAllowed){
      str += smbl;
    }

    for (let index = 1; index <= length; index++) {
      pass += str[Math.floor(Math.random() * str.length)];
      
    }
setPassword(pass)

  },[length,numberAllowed,symbolAllowed,setPassword,genBtnRef])

  const cpy = useCallback(()=>{
    passRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
  return (
    <>
      <h1 className="text-4xl text-center text-white">Password Generator</h1>
      <div className="w-full flex justify-center mt-10">
        <input type="text" className="w-80 rounded-s-3xl border-none outline-none pl-3" ref={passRef} value={password} readOnly/>
          <button className="bg-blue-600 text-white rounded-e-3xl w-20 h-10 text-xl" onClick={cpy}>copy</button>
              </div>
      <div className="w-1/2 ml-96 mt-10 h-60 bg-white rounded-3xl">
       <p>length:{length}</p> <input type="range" list="marker" min={8} max={16} value={length} onChange={(e)=>{
        setLength(e.target.value)
        }} />
        <input type="checkbox" onChange={()=>{setNumberAllowed((prev)=>!prev);

        }} /><label>Numbers</label>
        <input type="checkbox" onChange={()=>{setSymbolAllowed((prev)=>!prev)

        }} /><label>Symbol</label>
      </div>
    </>
  )
}

export default App
