import { useState } from 'react'


function App() {
  let [counter ,setCounter] = useState(0)
  let [color,setColor] = useState("olive")
  function addValue(){
    setCounter(counter+1);
  }
  function removeValue(){
    setCounter(counter-1);
  }
  
  return (
    <>
    <div className='w-full flex flex-col items-center justify-center h-screen  gap-2' style={{backgroundColor:color}}>
      <h1>My First Counter</h1>
      <h2>Counter Value : {counter}</h2>
      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-black' onClick={addValue}>Add Value</button>
      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-black' onClick={removeValue}>Remove Value</button>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'><div 
      className='flex fflex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-3xl'
      ><button onClick={()=>setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}} >Red</button>
      <button  onClick={()=>setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}} >Blue</button>
      <button  onClick={()=>setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}} >Green</button>
      <button   onClick={()=>setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"yellow"}} >Yellow</button>
      <button  onClick={()=>setColor("navy")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"navy"}} >Navy</button>
      <button  onClick={()=>setColor("lavender")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"lavender"}} >Lavender</button>
      <button  onClick={()=>setColor("pink")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"pink"}} >Pink</button>
      <button  onClick={()=>setColor("grey")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"grey"}} >Grey</button>
      </div></div>
      </div>
    </>

  )
}

export default App
