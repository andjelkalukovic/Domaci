import React from 'react'

const Ispis=({positive,negative,neutral})=>{
if (positive===0 && neutral===0 && negative===0){
    return (<p>Jos uvek nema ocena za kafic</p>)
}
else {return (<>
<p>Ukupan broj glasova: {positive+neutral+negative}</p>
      <p>Procenat pozitivnih: {positive/(positive+neutral+negative)*100}</p>
      </>
)}
}
export default Ispis;