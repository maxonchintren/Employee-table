import React from 'react'

import { Table, Column, Cell } from 'fixed-data-table-2'
import 'fixed-data-table-2/dist/fixed-data-table.css'

import InputCell from '../UIKit/InputCell'
import StatusModal from './StatusModal'

import s from './Employee.module.css'

const EmployeeTable = ({
  data,
  changeEmployeeName,
  changeEmployeesProject,
  changeStatus,
  statuses,
  loaded,
}) => {
  return (
    <div className={s.employee_table_container}>
      <Table
        rowHeight={100}
        rowsCount={data.length}
        width={900}
        height={5000}
        headerHeight={100}
      >
        <Column
          header={<Cell>Имя</Cell>}
          cell={({ rowIndex, ...props }) => (
            <Cell {...props} className={s.cell_name}>
              <InputCell
                loaded={loaded}
                text={data[rowIndex].name}
                inputHandler={changeEmployeeName}
                index={rowIndex}
              />
            </Cell>
          )}
          width={300}
        />
        <Column
          header={<Cell>Проект</Cell>}
          cell={({ rowIndex, ...props }) => (
            <Cell {...props}>
              <InputCell
                loaded={loaded}
                text={data[rowIndex].project}
                inputHandler={changeEmployeesProject}
                index={rowIndex}
              />
            </Cell>
          )}
          width={300}
        />
        <Column
          header={<Cell>Статус</Cell>}
          cell={({ rowIndex, ...props }) => (
            <Cell
              {...props}
              text={data[rowIndex].status}
              id={rowIndex}
              className={s.cell_status}
            >
              {data[rowIndex].status}
              <StatusModal inputHandler={changeStatus} statuses={statuses} />
            </Cell>
          )}
          width={300}
        />
      </Table>
    </div>
  )
}

export default EmployeeTable
