import React from 'react'

const Pozitivni=({positive,setPositive})=>{
    return (<>
        <button onClick={()=>setPositive(positive+1)}>+</button>
      <p>Pozitivni: {positive}</p>
      </>
    )
}
export default Pozitivni;