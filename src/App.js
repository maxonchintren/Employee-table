import React from 'react';

import EmployeeTable from './Components/EmployeeTable/EmployeeTable';
import MonthTable from './Components/MonthTable/MonthTable';
import Button from './Components/Button'

import initialData from './initial-data'

import {addEmployee} from './BtnHandlers/handlers'

function App() {

  let date = new Date()

  const [employees, setEmployees] = React.useState(initialData.data)

  function addBtnHandler() {
    return addEmployee(employees, setEmployees)
  }

  function addName(value, id) {
    setEmployees(
      employees.map((employee, index) => {
        if (index === +id) {
          employee.name = value
        }
        return employee
      })
    )
    console.log(employees)
}

  function addProject(value, id) {
    setEmployees(
      employees.map((employee, index) => {
        if (index === +id) {
          employee.project = value
        }
        return employee
      })
    )
  }

  function changeStatus(event) {
    let targetId = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.id
    let newStatus = event.target.textContent
    setEmployees(
      employees.map((employee, index) => {
        if (index === +targetId) {
          employee.status = newStatus
        }
        return employee
      })
    )
  }

  return (
    
    <div style={{ display: 'flex' }} id = 'main-wrapper'>
      <EmployeeTable data={employees} addName = {addName} addProject = {addProject} changeStatus = {changeStatus}/>
      {Object.keys(initialData.calendar).splice(date.getMonth()).map((month, index) => {
        return (
          <MonthTable data={employees} 
          calendar={initialData.calendar} 
          month={month} 
          key ={index}
          />
        )
      })}
      <Button text = 'Добавить сотрудника' type = 'addEmp' handler={addBtnHandler}></Button>
    </div>
  );
}

export default App;
