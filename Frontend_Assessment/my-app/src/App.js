//import logo from './logo.svg';
//import React,{useState} from "react";
import { useState, useEffect } from 'react';
import './App.css';
//import App from './Components/App';

function App() {
  const [Employees, setEmployees] = useState([])
  const [Employee, setEmployee] = useState({
    name: "", mobile: "", email: ""
  })
  const addEmployee = (e) => {
    e.preventDefault()
    setEmployees(curr => [Employee, ...Employees])
    document.getElementById('EmployeeForm').reset()


  }
  const deleteEmployee = (e, ind) => {
    e.preventDefault()
    let tempEmployess = [...Employees]
    let tempEmployess1 = tempEmployess.splice(0, ind)
    tempEmployess1 = [...tempEmployess1, ...tempEmployess.splice(1)]
    console.log(tempEmployess1)
    //console
    setEmployees(tempEmployess1)
    console.log(ind)




  }
  useEffect(() => {
    console.log(Employees)


  }, [Employees])


  return (
    <>
      <h5 style={{ color: "purple" }}>Employee List</h5>
      <br />
      <div className="row">
        <form id="EmployeeForm" className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input required id="first_name" onChange={e => setEmployee({ ...Employee, name: e.target.value.trim() })} type="text" className="validate" />
              <label htmlFor="first_name">Name</label>
            </div>

          </div>

          <div className="row">
            <div className="input-field col s12">
              <input required id="password" onChange={e => setEmployee({ ...Employee, mobile: e.target.value.trim() })} type="text" className="validate" />
              <label htmlFor="password">Mobile Number</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input required id="email" onChange={e => setEmployee({ ...Employee, email: e.target.value.trim() })} type="email" className="validate" />
              <label htmlFor="email">Email</label>
            </div>
          </div>

          <button className="btn waves-effect waves-light" onClick={addEmployee} name="action">ADD </button>


        </form>
      </div>
      <div>
        {
          Employees.map((emp, ind) => (
            <div>
              <div style={{ display: 'flex' }}>
                <pre>

                  <h7>Name:</h7>
                  <br />


                  {emp.name}
                <br />

                  <h7>Mobile No.: </h7>
                  <br />

                  {emp.mobile
                  }
                </pre>


              </div>

              <h7>Email ID: </h7>
              {emp.email}
              <button className="btn waves-effect waves-light" onClick={(e) => deleteEmployee(e, ind)} name="action">Delete</button>
            </div>

          ))
        }
      </div>



    </>
  );
}

export default App;
