import React, { useState, useEffect } from 'react'
import { getAllEmployees } from './EmployeeService'
import Employee from './Employee'
import Select from './Select'
import Buttons from './Button'
import Unos from './Unos'


const EmployeeList = () => {
    const [employee, setEmployee] = useState([])
  
    useEffect(() => {
      getAllEmployees().then(data => setEmployee(data))
    }, [])
  

    return (
        <div>
            <Unos></Unos>
            <Select></Select>
          {employee.slice(0, 20).map(employee => <Employee employee={employee} key={employee.id} />)}
         <Buttons></Buttons>
        </div>
    )
  }

  export default EmployeeList;