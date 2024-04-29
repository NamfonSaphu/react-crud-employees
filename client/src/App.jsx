/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import Axios from 'axios'
import { useState } from 'react'

function App() {

  const [employeeList, setEmployeesList] = useState([]);

  const getEmployees = () => {
    Axios.get('http://localhost:3001/employees').then((response) => {
      setEmployeesList(response.data);
    }); 
  }

  return (
    <div className="App container">
      <h1>Employee Information</h1>
      <div className="information">
        <form action="">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input type="text" className="form-control" placeholder="Enter name" />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">Age:</label>
            <input type="number" className="form-control" placeholder="Enter age" />
          </div>
          <div className="mb-3">
            <label htmlFor="country" className="form-label">Country:</label>
            <input type="text" className="form-control" placeholder="Enter country" />
          </div>
          <div className="mb-3">
            <label htmlFor="position" className="form-label">Position:</label>
            <input type="text" className="form-control" placeholder="Enter position" />
          </div>
          <div className="mb-3">
            <label htmlFor="wage" className="form-label">Wage:</label>
            <input type="number" className="form-control" placeholder="Enter wage" />
          </div>
          <button className='btn btn-success'>Add Employee</button>
        </form>
      </div>
      <hr />
      <div className="employee">
        <button className='btn btn-primary' onClick={getEmployees}>Show Employee</button>
        <hr />
        {employeeList.map((val, key)=>{
          return (
            <div className="employee card">
              <div className="card-body text left">
                <p className='card-text'>Name: {val.name}</p>
                <p className='card-text'>Age: {val.age}</p>
                <p className='card-text'>Country: {val.country}</p>
                <p className='card-text'>Position: {val.position}</p>
                <p className='card-text'>Wage: {val.wage}</p>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default App
