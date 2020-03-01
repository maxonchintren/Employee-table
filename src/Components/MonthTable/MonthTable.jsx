import React from 'react'
import { Table, Column, Cell } from 'fixed-data-table-2';
import 'fixed-data-table-2/dist/fixed-data-table.css';


let styles = {
    confirmed: {
        background: 'rgba(52, 163, 46, 0.7)'
    },
    notConfirmed: {
        background: 'rgba(30%, 41%, 82%, 0.7)'
    },
    downtime: {
        background: 'rgba(82%, 25%, 27%, 0.7)'
    }
}


const MonthTable = ({ data, calendar, month }) => {

  
    function setColor(rowIndex) {
        if (data[rowIndex - 1].months[month].isConfirmed) {
            return styles.confirmed
        } else if (data[rowIndex - 1].months[month].isConfirmed === null) {
            return styles.downtime
        } else if (data[rowIndex - 1].months[month].isConfirmed === false) {
            return styles.notConfirmed
        }
    }

    return (
        <div style={{ display: 'flex' }}>
            <Table
                rowHeight={50}
                rowsCount={data.length + 1}
                width={400}
                height={5000}
                headerHeight={50}
                rowHeightGetter={(index) => index === 0 ? 50 : 100}
            >
                {calendar[month].weeks.map((week, index) => {
                    return (
                        <Column
                            key = {index}
                            header={index === 0 ? calendar[month].name : ''}
                            columnKey={index}
                            cell={({ rowIndex, columnKey, ...props }) => {
                                if (rowIndex === 0) {
                                    return <Cell {...props} key={index}>{week}</Cell>
                                } else {
                                    return (
                                        <Cell
                                            {...props}
                                            style={setColor(rowIndex)}
                                            key={index}
                                        >
                                            {data[rowIndex - 1].months[month].business[columnKey]}
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