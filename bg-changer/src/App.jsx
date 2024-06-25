import React, { useState } from "react"
function App() {
  const [color, setColor] = useState("white")

  return (
    <>
     <div className="h-screen w-full flex justify-center" style={{backgroundColor: color}}>
<div className="z-20 w-9/12 bg-white h-16 fixed flex items-center justify-center gap-3 shadow-xl rounded-3xl mt-5">
<button className="bg-red-600 text-white w-20 h-14 text-xl rounded-3xl" onClick={()=> setColor("red")}>Red</button>
<button className="bg-green-600 text-white w-20 h-14 text-xl rounded-3xl" onClick={()=> setColor("green")}>Green</button>
<button className="bg-blue-600 text-white w-20 h-14 text-xl rounded-3xl" onClick={()=> setColor("blue")}>Blue</button>
<button className="bg-stone-600 text-white w-20 h-14 text-xl rounded-3xl" onClick={()=> setColor("grey")}>Stone</button>
<button className="bg-pink-600 text-white w-20 h-14 text-xl rounded-3xl" onClick={()=> setColor("pink")}>pink</button>
<button className="bg-black text-white w-20 h-14 text-xl rounded-3xl" onClick={()=> setColor("black")}>Black</button>
<button className="bg-yellow-400 text-white w-20 h-14 text-xl rounded-3xl" onClick={()=> setColor("yellow")}>yellow</button>
<button className="bg-orange-600 text-white w-20 h-14 text-xl rounded-3xl" onClick={()=> setColor("orange")}>Orange</button>
<button className="bg-purple-600 text-white w-20 h-14 text-xl rounded-3xl" onClick={()=> setColor("purple")}>Purple</button>
</div>

     </div>
     
    </>
  )
}

export default App
