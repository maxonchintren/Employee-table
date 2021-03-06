import React from 'react'

import { Table, Column, Cell } from 'fixed-data-table-2'
import 'fixed-data-table-2/dist/fixed-data-table.css'

import InputCell from '../UIKit/InputCell'
import ColorModal from './ColorModal'

import s from './Month.module.css'

const MonthTable = ({
  data,
  calendar,
  month,
  addTimeSpent,
  colors,
  changeColor,
  loaded,
}) => {
  const [showColorSelection, setShowColorSelection] = React.useState(false)
  let styles = {}

  colors.map(color => {
    styles[color.name] = {
      background: `rgb(${color.color[0]}, ${color.color[1]}, ${color.color[2]})`,
      textAlign: 'center',
    }
    return color
  })

  function contextHandler(event) {
    event.preventDefault()
    setShowColorSelection(!showColorSelection)
  }

  return (
    <div className={s.month_table_container}>
      <Table
        rowHeight={50}
        rowsCount={data.length + 1}
        width={400}
        height={5000}
        headerHeight={50}
        rowHeightGetter={index => (index === 0 ? 50 : 100)}
      >
        {calendar[month].weeks.map((week, index) => {
          return (
            <Column
              key={index}
              header={index === 0 ? calendar[month].name : ''}
              columnKey={index}
              cell={({ rowIndex, columnKey, ...props }) => {
                if (rowIndex === 0) {
                  return (
                    <Cell {...props} key={index} className={s.week_cell}>
                      {week}
                    </Cell>
                  )
                } else {
                  return (
                    <Cell
                      {...props}
                      style={
                        styles[data[rowIndex - 1].months[month].isConfirmed]
                      }
                      key={index}
                      onContextMenu={contextHandler}
                    >
                      <InputCell
                        text={
                          data[rowIndex - 1].months[month].business[columnKey]
                        }
                        inputHandler={addTimeSpent}
                        index={rowIndex - 1}
                        month={month}
                        columnKey={index}
                        className={s.input_cell}
                        loaded={loaded}
                      />
                      {showColorSelection && columnKey === 0 ? (
                        <ColorModal
                          colors={colors}
                          index={rowIndex - 1}
                          changeColor={changeColor}
                          month={month}
                        />
                      ) : (
                        ''
                      )}
                    </Cell>
                  )
                }
              }}
              width={calendar[month].weeks.length === 4 ? 100 : 80}
            />
          )
        })}
      </Table>
    </div>
  )
}

export default MonthTable
