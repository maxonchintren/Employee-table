import React from 'react'
import { Table, Column, Cell } from 'fixed-data-table-2';
import 'fixed-data-table-2/dist/fixed-data-table.css';

const MonthTable = ({ data, calendar, month }) => {

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
                <Column
                    columnKey = {0}
                    header={<Cell>{calendar[month].name}</Cell>}
                    cell={({rowIndex, columnKey, ...props }) => {
                        if (rowIndex === 0) {
                            return <Cell {...props}>{calendar[month].weeks[columnKey]}</Cell>
                        } else {
                            return <Cell {...props}>{data[rowIndex - 1].months[month].business[columnKey]}</Cell>
                        }
                    }}
                    width={100}
                />
                <Column
                    columnKey={1}
                    cell={({rowIndex, columnKey, ...props }) => {
                        if (rowIndex === 0) {
                            return <Cell {...props}>{calendar[month].weeks[columnKey]}</Cell>
                        } else {
                            return <Cell {...props}>{data[rowIndex - 1].months[month].business[columnKey]}</Cell>
                        }
                    }}
                    width={100}
                />
                <Column
                    columnKey={2}
                    cell={({rowIndex, columnKey, ...props }) => {
                        if (rowIndex === 0) {
                            return <Cell {...props}>{calendar[month].weeks[columnKey]}</Cell>
                        } else {
                            return <Cell {...props}>{data[rowIndex - 1].months[month].business[columnKey]}</Cell>
                        }
                    }}
                    width={100}
                />

                <Column
                    columnKey={3}
                    cell={({rowIndex, columnKey, ...props }) => {
                        if (rowIndex === 0) {
                            return <Cell {...props}>{calendar[month].weeks[columnKey]}</Cell>
                        } else {
                            return <Cell {...props}>{data[rowIndex - 1].months[month].business[columnKey]}</Cell>
                        }
                    }}
                    width={100}
                />
            </Table>

        </div>
    )
}

export default MonthTable