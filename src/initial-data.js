const initialData = {
    data: [
        {
            name: 'Maxim Moiseev',
            project: 'Employee Table',
            status: 'Идет',
            months: {
                January: {
                    business: [40, 20, 40, 30],
                    isConfirmed: true
                    // true = confirmed, false = not confirmed, null = downtime
                },
                February: {
                    business: [20, 20, 20, 20],
                    isConfirmed: false
                },
                March: {
                    business: [40, 40, 40, 40],
                    isConfirmed: false
                },
                April: {
                    business: [20, 30, 30, 30],
                    isConfirmed: true
                },
                May: {
                    business: [20, 20, 20, 20],
                    isConfirmed: null
                },
                June: {
                    business: [],
                    isConfirmed: null
                },
                July: {
                    business: [],
                    isConfirmed: null
                },
                August: {
                    business: [],
                    isConfirmed: null
                },
                September: {
                    business: [],
                    isConfirmed: null
                },
                October: {
                    business: [],
                    isConfirmed: null
                },
                November: {
                    business: [],
                    isConfirmed: null
                },
                December: {
                    business: [],
                    isConfirmed: null
                }
            }
        },
        {
            name: 'Valery Pronin',
            project: 'Employee Table',
            status: 'Согласован старт',
            months: {
                January: {
                    business: [20, 40, 40, 40],
                    isConfirmed: true
                    // true = confirmed, false = not confirmed, null = downtime
                },
                February: {
                    business: [40, 40, 40, 40],
                    isConfirmed: true
                },
                March: {
                    business: [30, 40, 40,30],
                    isConfirmed: true
                },
                April: {
                    business: [20, 20, 20, 20],
                    isConfirmed: false
                },
                May: {
                    business: [],
                    isConfirmed: null
                },
                June: {
                    business: [],
                    isConfirmed: null
                },
                July: {
                    business: [],
                    isConfirmed: null
                },
                August: {
                    business: [],
                    isConfirmed: null
                },
                September: {
                    business: [],
                    isConfirmed: null
                },
                October: {
                    business: [],
                    isConfirmed: null
                },
                November: {
                    business: [],
                    isConfirmed: null
                },
                December: {
                    business: [],
                    isConfirmed: null
                }
            }
        },
        {
            name: 'Alina Deryabina',
            project: 'Being Cutie',
            status: 'Завершается',
            months: {
                January: {
                    business: [],
                    isConfirmed: null
                },
                February: {
                    business: [40,40,40,40],
                    isConfirmed: true
                },
                March: {
                    business: [],
                    isConfirmed: null
                },
                April: {
                    business: [40,40,40,40],
                    isConfirmed: true
                },
                May: {
                    business: [30,40,40,40],
                    isConfirmed: false
                },
                June: {
                    business: [],
                    isConfirmed: null
                },
                July: {
                    business: [],
                    isConfirmed: null
                },
                August: {
                    business: [],
                    isConfirmed: null
                },
                September: {
                    business: [],
                    isConfirmed: null
                },
                October: {
                    business: [],
                    isConfirmed: null
                },
                November: {
                    business: [],
                    isConfirmed: null
                },
                December: {
                    business: [],
                    isConfirmed: null
                }
            }
        }
    ],

    calendar: {
        January: {
            name: 'Январь',
            weeks: [1, 2, 3, 4, 5]
        },
        February: {
            name: 'Февраль',
            weeks: [6, 7, 8, 9]
        },
        March: {
            name: 'Март',
            weeks: [10, 11, 12, 13]
        },
        April: {
            name: 'Апрель',
            weeks: [14, 15, 15, 17, 18]
        },
        May: {
            name: 'Май',
            weeks: [19, 20, 21, 22]
        },
        June: {
            name: 'Июнь',
            weeks: [23, 24, 25, 26]
        },
        July: {
            name: 'Июль',
            weeks: [27, 28, 29, 30, 31]
        },
        August: {
            name: 'Август',
            weeks: [32, 33, 34, 35]
        },
        September: {
            name: 'Сентябрь',
            weeks: [36, 37, 38, 39]
        },
        October: {
            name: 'Октябрь',
            weeks: [40, 41, 42, 43, 44]
        },
        November: {
            name: 'Ноябрь',
            weeks: [45, 45, 45, 48]
        },
        December: {
            name: 'Декабрь',
            weeks: [49, 50, 51, 52, 53]
        }
    }
}

export default initialData