import axios from 'axios'

export const BASE_URL = `http://dummy.restapiexample.com/api/v1`
export const AllEmployeeUrl = `${BASE_URL}/employees`

export const getAllEmployees = async () =>{
    return await axios.get(`${AllEmployeeUrl}`).then(response => response.data.data )
}

export const CreateNewEmpolyee = async (name, salary)=> {
    return await axios.post (`${BASE_URL}/create`, {name,salary})
}

// export const SingleEmployeeUrl = `${BASE_URL}/employee/` 