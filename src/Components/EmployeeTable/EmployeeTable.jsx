import React from 'react'
import { Table, Column, Cell } from 'fixed-data-table-2';
import 'fixed-data-table-2/dist/fixed-data-table.css';

const EmployeeTable = ({data}) => {

    return (
        <div style={{ display: 'flex' }}>
            <Table
                rowHeight={100}
                rowsCount={data.length}
                width={900}
                height={5000}
                headerHeight={100}>
                <Column
                    header={<Cell>Имя</Cell>}
                    cell={({ rowIndex, ...props }) => (
                        <Cell {...props}>
                            {data[rowIndex].name}
                        </Cell>
                    )}
                    width={300}
                />
                <Column
                    header={<Cell>Проект</Cell>}
                    cell={({ rowIndex, ...props }) => (
                        <Cell {...props}>
                            {data[rowIndex].project}
                        </Cell>
                    )}
                    width={300}
                />
                <Column
                    header={<Cell>Статус</Cell>}
                    cell={({ rowIndex, ...props }) => (
                        <Cell {...props}>
                            {data[rowIndex].status}
                        </Cell>
                    )}
                    width={300}
                />
            </Table>
        </div>
    )
}

export default EmployeeTable