import React, {useState} from 'react'

const State = () => {

    const [state,setState] = useState(0)
    let normal = 0

    let handleNormal = ()=>{
        normal =10
    }

    let handleState = ()=>{
        setState(10)
    }

    

  return (
    <div>
        <h1>this is state variable{state}</h1>
        <h2>this is normal variable{normal}</h2>
        <button onClick={handleNormal}>Normal</button>
        <button onClick={handleState}>State</button>
        
    </div>
  )
}

export default State