import React from 'react'

function Ali({value}) {
  return (
    <div>
      {value%2===0 ? <h2>even</h2> : <h2>odd</h2>}
    </div>
  )
}

export default Ali
