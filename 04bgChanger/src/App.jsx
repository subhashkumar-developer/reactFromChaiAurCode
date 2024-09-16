import { useState } from "react"
function App() {
  const[color,setColor]=useState("olive")

  return (
    
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"></div>

      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-gray-50 py-2 px-3 rounded-3xl">
        <button className="outline-none px-4 py-1 rounded-full shadow-lg">Red</button>
        </div>
      </div>
  
  )
}

export default App
