import React from 'react';
import './App.css';

import EmployeeTable from './Components/EmployeeTable/EmployeeTable';
import MonthTable from './Components/MonthTable/MonthTable';

import calendar from './calendar'

function App() {
  console.log(calendar)
  const data = [
    {
      name: 'Maxim Moiseev',
      project: 'Employee Table',
      status: 'Start',
      months: {
        January: {
          business: [40, 20, 40 ,30],
          isConfirmed: true 
          // true = confirmed, false = not confirmed, null = downtime
        },
        March: {
          business: [0, 0, 0 ,0],
          isConfirmed: null 
          // true = confirmed, false = not confirmed, null = downtime
        }
      }
    },
    {
      name: 'Valery Pronin',
      project: 'Employee Table',
      status: 'Going',
      months: {
        January: {
          business: [20, 40, 40 ,40],
          isConfirmed: true 
          // true = confirmed, false = not confirmed, null = downtime
        },
      }
    },
    {
      name: 'Alina Deryabina',
      project: 'Being Cutie',
      status: 'Doing very well',
      months: {
        January: {
          business: [],
          isConfirmed: null
        }
      }
    }
  ]

  return (
    <div style={{ display: 'flex' }}>
      <EmployeeTable data={data} />
      <MonthTable data={data} calendar ={calendar} month = {'January'}/>

    </div>
  );
}

export default App;
