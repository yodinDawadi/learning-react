import { useState } from "react"
function App() {
  const [input, setInput] = useState();
const appendValue =(value)=>{
  setInput(input + value);
}
const clearValue =()=>{
  setInput("");
}
const calculator =()=>{
setInput(eval(input));
}
const cutValue = ()=>{
  setInput(input.slice(0,-1));
}
  return (
    <>
      <div className="h-screen w-screen bg-slate-800 flex items-center justify-center">
        <div className="bg-slate-700 h-2/3 gap-4  w-5/6 flex flex-wrap justify-center rounded-3xl">
        <input type="text" className="w-full h-14 rounded-t-3xl border-none outline-none pl-3 text-3xl" value={input} onChange={(e)=>{
        }} readOnly />
        <p className="w-1/2"></p>
        <button className="w-20 h-7 rounded-3xl bg-blue-400 text-2xl text-white" onClick={cutValue}>x</button>
        <button className="w-20 h-14 rounded-3xl bg-slate-400 text-2xl text-white"onClick={()=>{appendValue("9")}}>9</button>
        <button className="w-20 h-14 rounded-3xl bg-slate-400 text-2xl text-white"onClick={()=>{appendValue("8")}}>8</button>
        <button className="w-20 h-14 rounded-3xl bg-slate-400 text-2xl text-white"onClick={()=>{appendValue("7")}}>7</button>
        <button className="w-20 h-14 rounded-3xl bg-slate-400 text-2xl text-white" onClick={()=>{appendValue("+")}}>+</button>
        <button className="w-20 h-14 rounded-3xl bg-slate-400 text-2xl text-white"onClick={()=>{appendValue("6")}}>6</button>
        <button className="w-20 h-14 rounded-3xl bg-slate-400 text-2xl text-white"onClick={()=>{appendValue("5")}}>5</button>
        <button className="w-20 h-14 rounded-3xl bg-slate-400 text-2xl text-white"onClick={()=>{appendValue("4")}}>4</button>
        <button className="w-20 h-14 rounded-3xl bg-slate-400 text-2xl text-white" onClick={()=>{appendValue("-")}}>-</button>
        <button className="w-20 h-14 rounded-3xl bg-slate-400 text-2xl text-white"onClick={()=>{appendValue("3")}}>3</button>
        <button className="w-20 h-14 rounded-3xl bg-slate-400 text-2xl text-white"onClick={()=>{appendValue("2")}}>2</button>
        <button className="w-20 h-14 rounded-3xl bg-slate-400 text-2xl text-white"onClick={()=>{appendValue("1")}}>1</button>
        <button className="w-20 h-14 rounded-3xl bg-slate-400 text-2xl text-white" onClick={()=>{appendValue("*")}}>*</button>
        <button className="w-20 h-14 rounded-3xl bg-slate-400 text-2xl text-white"onClick={()=>{appendValue("0")}}>0</button>
        <button className="w-20 h-14 rounded-3xl bg-slate-400 text-2xl text-white" onClick={()=>{appendValue("/")}}>/</button>
        <button className="w-20 h-14 rounded-3xl bg-slate-400 text-2xl text-white" onClick={clearValue}>CE</button>
        <button className="w-20 h-14 rounded-3xl bg-blue-400 text-2xl text-white" onClick={calculator}>=</button>
        
        
        </div>
      </div>
    </>
  )
}

export default App
