import React from 'react';

import EmployeeTable from './Components/EmployeeTable/EmployeeTable';
import MonthTable from './Components/MonthTable/MonthTable';
import Button from './Components/UIKit/Button'
import ModalStatusList from './Components/EmployeeTable/ModalStatusList';
import ModalColorList from './Components/MonthTable/ModalColorList'

import initialData from './initial-data'

import { addEmployee, getData, postData } from './Utilities/handlers'

function App() {

  let date = new Date()
  const [loaded, setLoaded] = React.useState(false)
  const [isClickedStatus, setClickStatus] = React.useState(false)
  const [isClickedColor, setClickColor] = React.useState(false)
  const [statuses, setStatuses] = React.useState(initialData.statuses)
  const [employees, setEmployees] = React.useState(initialData.data)
  const [colors, setColors] = React.useState(initialData.colors)


  React.useEffect(() => {
    async function load() {
      let newData = await (await getData()).json()
        setStatuses(await newData.statuses)
        setEmployees(await newData.data)
        setColors(await newData.colors)
        setLoaded(true)
    }
    load()
  }, [])

  React.useEffect(() => {
    if (loaded) {
      postData(statuses, employees, colors)
    }

  }, [statuses, employees, colors, loaded])


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

  function changeStatus(event, value) {
    let targetId = event.target.parentElement.parentElement.parentElement.parentElement.id
    let newStatus = value
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

  function changeColor(index, month, event) {
    let value = event.target.textContent
    setEmployees(
      employees.map((employee, i) => {
        if (i === index) {
          employee.months[month].isConfirmed = value
        }
        return employee
      })
    )
  }

  function addColorInList(value, colorName, setFunc) {
    if (value.trim()) {
      setColors(colors.concat([{ name: colorName, color: value.split(',') }]))
      setFunc('')
    }
  }

  function deleteColorInList(index) {
    if (colors.length === 1) {
      alert('Должен остаться как минимум 1 цвет!')
      return false
    }
    if (colors.length === 5) {
      alert('Максимум 5 цветов!')
    }
    setColors(
      colors.filter((color, i) => {
        if (i === index) {
          return false
        }
        return true
      })
    )
  }
  if (loaded) {
    return (
      <div className='app_container'>
        <EmployeeTable data={employees} addName={addName} addProject={addProject} changeStatus={changeStatus} statuses={statuses} loaded ={loaded}/>
        {Object.keys(initialData.calendar).splice(date.getMonth(), 3).map((month, index) => {
          return (
            <MonthTable data={employees}
              calendar={initialData.calendar}
              month={month}
              key={index}
              addTimeSpent={addTimeSpent}
              colors={colors}
              changeColor={changeColor}
              loaded ={loaded}
            />
          )
        })}
        <Button text="Добавить сотрудника" type="addEmp" handler={addBtnHandler}></Button>
        <Button text="Список статусов" type="editStatus" handler={() => setClickStatus(!isClickedStatus)}></Button>
        {!isClickedStatus ? '' : <ModalStatusList statuses={statuses}
          closeFunc={() => setClickStatus(!isClickedStatus)}
          addFunc={addStatusInList}
          deleteFunc={deleteStatusInList}
        />}
        <Button text="Список цветов" type="editColor" handler={() => setClickColor(!isClickedColor)} />
        {!isClickedColor ? '' : <ModalColorList colors={colors}
          closeFunc={() => setClickColor(!isClickedColor)}
          addFunc={addColorInList}
          deleteFunc={deleteColorInList}
        />}
      </div>
    );
  } else {
    return (
      <div className = "loading">Загрузка...</div>
    )
  }
}

export default App;
