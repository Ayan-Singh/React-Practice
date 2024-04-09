import { useState } from 'react'


function App() {
  const [counter , setCounter] = useState(0);
  function addVAlue(){
    setCounter(counter+1)
  }

  return (
    <>
      <h1>Counter :{counter}</h1>
      <button onClick ={addVAlue} > Add</button>
    </>
  )
}

export default App
