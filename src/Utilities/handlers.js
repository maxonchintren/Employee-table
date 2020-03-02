

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

async function getData(setFunc1, setFunc2, setFunc3) {
    const apiCall = await fetch(`https://employee-table-fa1eb.firebaseio.com/initialData.json`);
    const response = await apiCall.json()
    let key = Object.keys(response)[0]
    setFunc1(response[key].data)
    setFunc2(response[key].colors)
    setFunc3(response[key].statuses)
  }

function postData() {
        const data = {}
        fetch('https://employee-table-fa1eb.firebaseio.com/initialData.json', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json' 
                }
            })
            
}

export {addEmployee, getData, postData}