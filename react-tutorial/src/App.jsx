import React, { useState } from 'react'
import Ali from './Ali'

function App() {
  const [a,b]=useState(0)
  return (
    <div>
      <h2 >{a}</h2>
      <button onClick={()=>b(a+1)}>increase</button>
      <button onClick={()=>b(a-1)}>decrease</button>
      <Ali value={a}/>
    </div>
  )
}

export default App
