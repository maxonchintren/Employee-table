


function addEmployee(array, setFunc) {
    setFunc(
        array.concat([
            {
                name: '',
                project: '',
                status: '',
                months: {
                    January: {
                        business: ['', '', '', ''],
                        isConfirmed: null
                    },
                    February: {
                        business: ['', '', '', ''],
                        isConfirmed: null
                    },
                    March: {
                        business: ['', '', '', ''],
                        isConfirmed: null
                    },
                    April: {
                        business: ['', '', '', ''],
                        isConfirmed: null
                    },
                    May: {
                        business: ['', '', '', ''],
                        isConfirmed: null
                    },
                    June: {
                        business: ['', '', '', ''],
                        isConfirmed: null
                    },
                    July: {
                        business: ['', '', '', ''],
                        isConfirmed: null
                    },
                    August: {
                        business: ['', '', '', ''],
                        isConfirmed: null
                    },
                    September: {
                        business: ['', '', '', ''],
                        isConfirmed: null
                    },
                    October: {
                        business: ['', '', '', ''],
                        isConfirmed: null
                    },
                    November: {
                        business: ['', '', '', ''],
                        isConfirmed: null
                    },
                    December: {
                        business: ['', '', '', ''],
                        isConfirmed: null
                    }
                }
            }
        ])
    )
}

async function getData() {
    return fetch(`https://employee-table-fa1eb.firebaseio.com/initialData.json/`);

  }



function postData(statuses, employees, colors) {
        const postingData = {statuses: statuses, data: employees, colors: colors}
        fetch(`https://employee-table-fa1eb.firebaseio.com/initialData.json/`, {
                method: 'PUT',
                body: JSON.stringify(postingData),
                headers: {
                    'Content-Type': 'application/json' 
                }
            })         
}

export {addEmployee, getData, postData}