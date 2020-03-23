import React, { useState } from 'react'
import { CreateNewEmpolyee } from './EmployeeService'

const Unos = ()=>{ 
    const [inputEmployee, setInputEmployee] = useState('')
    const [salary, setSalary] = useState('')
    
    const handleName = (e) => {
        setInputEmployee(e.target.value)
        console.log(inputEmployee);
      }
    
      const handleSalary = (e) => {
        setSalary(e.target.value)
        console.log(salary);
      }

      const handleSubmit = (e) => {
        e.preventDefault()
          CreateNewEmpolyee(inputEmployee,salary).then(response => console.log(response))
      }

      return (
        <form onSubmit={(e) => (handleSubmit(e))}>
        <input type='text' placeholder='Ime i prezime' required onChange={(e) => (handleName(e)) }></input>
        <input type='number' placeholder='Zarada' required onChange={(e) => (handleSalary(e))}></input>
        <input type='submit' value='Dodati'></input>
        <br/>
        <br/>
        <hr/>
      </form>
      )
}
export default Unos;