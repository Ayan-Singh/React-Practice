import { useState } from 'react'


function App() {
  let [counter ,setCounter] = useState(0)
  function addValue(){
    setCounter(counter+1);
  }
  function removeValue(){
    setCounter(counter-1);
  }
  return (
    <>
    <div className=' bg-green-400 flex flex-col items-center justify-center h-screen  gap-2   '>
      <h1>My First Counter</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
      </div>
    </>

  )
}

export default App
