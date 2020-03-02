

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

function editStatusArr() {

}


export {addEmployee, editStatusArr}