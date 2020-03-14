import React from 'react'

const Neutralni=({neutral,setNeutral})=>{
    return (<>
        <button onClick={()=>setNeutral(neutral+1)}>0</button>
      <p>Neutralni: {neutral}</p>
      </>
    )
}
export default Neutralni;