import React from 'react'

 const Employee = ({employee}) => {


    return (
        <>
        <p>{employee.id}</p>
        <p>{employee.employee_name}</p>
        <p>{employee.employee_salary}</p>
        <p>{employee.employee_age}</p>
        <img src={employee.profile_image} alt=""/>
        <hr/>
        </>
    )
}

export default Employee