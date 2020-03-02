import React from 'react'
import { Table, Column, Cell } from 'fixed-data-table-2';
import 'fixed-data-table-2/dist/fixed-data-table.css';
import InputCell from '../UIKit/InputCell';
import StatusModal from './StatusModal'

const EmployeeTable = ({data, addName, addProject, changeStatus, statuses, loaded}) => {
    const [isClicked, setClick] = React.useState(false)

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
                        <Cell {...props} style = {{position: 'relative'}}>
                            <InputCell loaded = {loaded} text = {data[rowIndex].name} inputHandler={addName} index={rowIndex}/>
                        </Cell>
                    )}
                    width={300}
                />
                <Column
                    header={<Cell>Проект</Cell>}
                    cell={({ rowIndex, ...props }) => (
                        <Cell {...props}>
                            <InputCell loaded = {loaded} text = {data[rowIndex].project} inputHandler={addProject} index={rowIndex}/>
                        </Cell>
                    )}
                    width={300}
                />
                <Column
                    header={<Cell>Статус</Cell>}
                    cell={({ rowIndex, ...props }) => (
                        <Cell {...props} text = {data[rowIndex].status} onClick = {() => setClick(!isClicked)} id={rowIndex} style ={{textAlign: 'center'}} >
                             {!isClicked ? data[rowIndex].status : <StatusModal inputHandler = {changeStatus} statuses = {statuses}/>}
                        </Cell>
                    )}
                    width={300}
                />
            </Table>
        </div>
    )
}

export default EmployeeTable