import React from 'react'

const Negativni=({negative,setNegative})=>{
    return (<>
        <button onClick={()=>setNegative(negative+1)}>-</button>
      <p>Negativni: {negative}</p>
      </>
    )
}
export default Negativni;