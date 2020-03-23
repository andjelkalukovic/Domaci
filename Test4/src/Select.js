import React from 'react'

const Select = ({handleChange})=>{
    return(
        <>
        <select onChange={(e)=>handleChange(e)}>
            <option selected disabled>Izaberite prikaz</option>
            <option value='5'>0-5</option>
            <option value='10'>6-10</option>
            <option value='15'>11-15</option>
            <option value='20'>16-20</option>
        </select>
        <br/>
        <br/>
        </>
    )
}
export default Select;