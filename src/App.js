import React from 'react';

import EmployeeTable from './Components/EmployeeTable/EmployeeTable';
import MonthTable from './Components/MonthTable/MonthTable';
import Button from './Components/Button'

import initialData from './initial-data'

import { addEmployee } from './BtnHandlers/handlers'
import Modal from './Components/Modal';

function App() {

  let date = new Date()
  const [isClicked, setClick] = React.useState(false)
  const [statuses, setStatuses] = React.useState(initialData.statuses)
  const [employees, setEmployees] = React.useState(initialData.data)
  const [colors, setColors] = React.useState(initialData.colors)

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

  function addTimeSpent(value, id, columnKey, month) {
    setEmployees(
      employees.map((employee, index) => {
        if (index === id) {
          employee.months[month].business[columnKey] = value
        }
        return employee
      })
    )
  }

  function addStatusInList(value, setFunc) {
    if (value.trim()) {
      setStatuses(statuses.concat([value]))
      setFunc('')
    }
  }

  function deleteStatusInList(index) {
    if (statuses.length === 1) {
      alert('Должен остаться как минимум 1 статус!')
      return false
    }
    setStatuses(
      statuses.filter((status, i) => {
        if (i === index) {
          return false
        }
        return true
      })
    )
  }

  return (

    <div style={{ display: 'flex' }}>
      <EmployeeTable data={employees} addName={addName} addProject={addProject} changeStatus={changeStatus} statuses={statuses} />
      {Object.keys(initialData.calendar).splice(date.getMonth(), 3).map((month, index) => {
        return (
          <MonthTable data={employees}
            calendar={initialData.calendar}
            month={month}
            key={index}
            addTimeSpent={addTimeSpent}
            colors = {colors}
          />
        )
      })}
        <Button text='Добавить сотрудника' type='addEmp' handler={addBtnHandler}></Button>
      {/* <div onClick = {() => setClick(!isClicked)}>
        {!isClicked ? <Button text='Список статусов' type='editStatus' handler={editStatusArr}></Button> : <Modal statuses = {statuses}/>}
      </div> */}
        <Button text='Список статусов' type='editStatus' handler = {() => setClick(!isClicked)}></Button>
        {!isClicked ? '' : <Modal statuses = {statuses} 
        closeFunc = {() => setClick(!isClicked)} 
        addFunc={addStatusInList}
        deleteFunc = {deleteStatusInList}
        />}
    </div>
  );
}

export default App;
