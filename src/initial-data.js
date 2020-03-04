let initialData = {
    data: [
        {
            name: ' ',
            project: ' ',
            status: ' ',
            months: {
                January: {
                    business: ['', '', '', ''],
                    isConfirmed: true
                    // true = confirmed, false = not confirmed, null = downtime
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
        },
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
            weeks: [45, 46, 47, 48]
        },
        December: {
            name: 'Декабрь',
            weeks: [49, 50, 51, 52, 53]
        }
    },
    colors: [
        { name: 'Простой', color: [223, 121, 124] },
        { name: 'Неподтвержден', color: [127, 148, 221] },
        { name: 'Подтвержден', color: [113, 190, 108] }
    ],
    statuses: ['Идет', 'Согласован старт', 'Завершается']
}

export default initialData