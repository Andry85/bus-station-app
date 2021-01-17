var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";



const initialState = {
    selectedFrom: '',
    selectedTo: '',
    selectedTime: '',
    departureList:[],
    destinationList: [],
    weekDay: weekday[d.getDay()],
    disabledDataPicker: true,
    path: [],
    data: [
        {
            id: 0,
            from: 'Vinnitsia',
            arrival: [
                {
                    destination: 'Kiev',
                    trip:  [
                        {
                            departure: '10:00',
                            stops: [
                                {
                                    title: 'Vinnitsia',
                                    time: '10:00'
                                },
                                {
                                    title: 'Zhitomir',
                                    time: '12:00'
                                },
                                {
                                    title: 'Bila Cerkva',
                                    time: '14:00'
                                },
                                {
                                    title: 'Kiev',
                                    time: '16:00'
                                }
                            ],
                            schedule: [
                                {
                                    dayOfWeek: 'Monday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Tuesday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Wednesday',
                                    status: false
                                },
                                {
                                    dayOfWeek: 'Thursday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Friday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Saturday',
                                    status: false
                                },
                                {
                                    dayOfWeek: 'Sunday',
                                    status: true
                                }
                            ]
                        },
                        {
                            departure: '12:00',
                            stops: [
                                {
                                    title: 'Vinnitsia',
                                    time: '12:00'
                                },
                                {
                                    title: 'Zhitomir',
                                    time: '14:00'
                                },
                                {
                                    title: 'Bila Cerkva',
                                    time: '19:00'
                                },
                                {
                                    title: 'Kiev',
                                    time: '18:00'
                                }
                            ],
                            schedule: [
                                {
                                    dayOfWeek: 'Monday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Tuesday',
                                    status: false
                                },
                                {
                                    dayOfWeek: 'Wednesday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Thursday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Friday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Saturday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Sunday',
                                    status: true
                                }
                            ]
                        },
                        {
                            departure: '16:00',
                            stops: [
                                {
                                    title: 'Vinnitsia',
                                    time: '16:00'
                                },
                                {
                                    title: 'Zhitomir',
                                    time: '18:00'
                                },
                                {
                                    title: 'Bila Cerkva',
                                    time: '20:00'
                                },
                                {
                                    title: 'Kiev',
                                    time: '22:00'
                                }
                            ],
                            schedule: [
                                {
                                    dayOfWeek: 'Monday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Tuesday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Wednesday',
                                    status: false
                                },
                                {
                                    dayOfWeek: 'Thursday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Friday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Saturday',
                                    status: false
                                },
                                {
                                    dayOfWeek: 'Sunday',
                                    status: true
                                }
                            ]
                        },
                    ]
                },
                {
                    destination: 'Lviv',
                    trip:  [
                        {
                            departure: '10:00',
                            stops: [
                                {
                                    title: 'Vinnitsia',
                                    time: '10:00'
                                },
                                {
                                    title: 'Khmelnytskyi',
                                    time: '12:00'
                                },
                                {
                                    title: 'Ternopil',
                                    time: '14:00'
                                },
                                {
                                    title: 'Lviv',
                                    time: '16:00'
                                }
                            ],
                            schedule: [
                                {
                                    dayOfWeek: 'Monday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Tuesday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Wednesday',
                                    status: false
                                },
                                {
                                    dayOfWeek: 'Thursday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Friday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Saturday',
                                    status: false
                                },
                                {
                                    dayOfWeek: 'Sunday',
                                    status: true
                                }
                            ]
                        },
                        {
                            departure: '12:00',
                            stops: [
                                {
                                    title: 'Vinnitsia',
                                    time: '12:00'
                                },
                                {
                                    title: 'Khmelnytskyi',
                                    time: '14:00'
                                },
                                {
                                    title: 'Ternopil',
                                    time: '18:00'
                                },
                                {
                                    title: 'Lviv',
                                    time: '20:00'
                                }
                            ],
                            schedule: [
                                {
                                    dayOfWeek: 'Monday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Tuesday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Wednesday',
                                    status: false
                                },
                                {
                                    dayOfWeek: 'Thursday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Friday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Saturday',
                                    status: false
                                },
                                {
                                    dayOfWeek: 'Sunday',
                                    status: true
                                }
                            ]
                        },
                        {
                            departure: '16:00',
                            stops: [
                                {
                                    title: 'Vinnitsia',
                                    time: '16:00'
                                },
                                {
                                    title: 'Khmelnytskyi',
                                    time: '18:00'
                                },
                                {
                                    title: 'Ternopil',
                                    time: '19:00'
                                },
                                {
                                    title: 'Lviv',
                                    time: '20:00'
                                }
                            ],
                            schedule: [
                                {
                                    dayOfWeek: 'Monday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Tuesday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Wednesday',
                                    status: false
                                },
                                {
                                    dayOfWeek: 'Thursday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Friday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Saturday',
                                    status: false
                                },
                                {
                                    dayOfWeek: 'Sunday',
                                    status: true
                                }
                            ]
                        },
                    ]
                },
                {
                    destination: 'Odessa',
                    trip:  [
                        {
                            departure: '10:00',
                            stops: [
                                {
                                    title: 'Vinnitsia',
                                    time: '10:00'
                                },
                                {
                                    title: 'Uman',
                                    time: '12:00'
                                },
                                {
                                    title: 'Troitske',
                                    time: '14:00'
                                },
                                {
                                    title: 'Odessa',
                                    time: '16:00'
                                }
                            ],
                            schedule: [
                                {
                                    dayOfWeek: 'Monday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Tuesday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Wednesday',
                                    status: false
                                },
                                {
                                    dayOfWeek: 'Thursday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Friday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Saturday',
                                    status: false
                                },
                                {
                                    dayOfWeek: 'Sunday',
                                    status: true
                                }
                            ]
                        },
                        {
                            departure: '12:00',
                            stops: [
                                {
                                    title: 'Vinnitsia',
                                    time: '12:00'
                                },
                                {
                                    title: 'Uman',
                                    time: '14:00'
                                },
                                {
                                    title: 'Troitske',
                                    time: '16:00'
                                },
                                {
                                    title: 'Odessa',
                                    time: '19:00'
                                }
                            ],
                            schedule: [
                                {
                                    dayOfWeek: 'Monday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Tuesday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Wednesday',
                                    status: false
                                },
                                {
                                    dayOfWeek: 'Thursday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Friday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Saturday',
                                    status: false
                                },
                                {
                                    dayOfWeek: 'Sunday',
                                    status: true
                                }
                            ]
                        },
                        {
                            departure: '16:00',
                            stops: [
                                {
                                    title: 'Vinnitsia',
                                    time: '16:00'
                                },
                                {
                                    title: 'Uman',
                                    time: '18:00'
                                },
                                {
                                    title: 'Troitske',
                                    time: '20:00'
                                },
                                {
                                    title: 'Odessa',
                                    time: '21:00'
                                }
                            ],
                            schedule: [
                                {
                                    dayOfWeek: 'Monday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Tuesday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Wednesday',
                                    status: false
                                },
                                {
                                    dayOfWeek: 'Thursday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Friday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Saturday',
                                    status: false
                                },
                                {
                                    dayOfWeek: 'Sunday',
                                    status: true
                                }
                            ]
                        },
                    ]
                }
            ] 
        },
        {
            id: 1,
            from: 'Dnipro',
            arrival: [
                {
                    destination: 'Ternopil',
                    trip:  [
                        {
                            departure: '10:00',
                            stops: [
                                {
                                    title: 'Dnipro',
                                    time: '10:00'
                                },
                                {
                                    title: 'Kiev',
                                    time: '12:00'
                                },
                                {
                                    title: 'Rivne',
                                    time: '14:00'
                                },
                                {
                                    title: 'Ternopil',
                                    time: '16:00'
                                }
                            ],
                            schedule: [
                                {
                                    dayOfWeek: 'Monday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Tuesday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Wednesday',
                                    status: false
                                },
                                {
                                    dayOfWeek: 'Thursday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Friday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Saturday',
                                    status: false
                                },
                                {
                                    dayOfWeek: 'Sunday',
                                    status: true
                                }
                            ]
                        },
                        {
                            departure: '12:00',
                            stops: [
                                {
                                    title: 'Dnipro',
                                    time: '12:00'
                                },
                                {
                                    title: 'Kiev',
                                    time: '14:00'
                                },
                                {
                                    title: 'Rivne',
                                    time: '16:00'
                                },
                                {
                                    title: 'Ternopil',
                                    time: '18:00'
                                }
                            ],
                            schedule: [
                                {
                                    dayOfWeek: 'Monday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Tuesday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Wednesday',
                                    status: false
                                },
                                {
                                    dayOfWeek: 'Thursday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Friday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Saturday',
                                    status: false
                                },
                                {
                                    dayOfWeek: 'Sunday',
                                    status: true
                                }
                            ]
                        },
                        {
                            departure: '16:00',
                            stops: [
                                {
                                    title: 'Dnipro',
                                    time: '16:00'
                                },
                                {
                                    title: 'Kiev',
                                    time: '18:00'
                                },
                                {
                                    title: 'Rivne',
                                    time: '20:00'
                                },
                                {
                                    title: 'Ternopil',
                                    time: '22:00'
                                }
                            ],
                            schedule: [
                                {
                                    dayOfWeek: 'Monday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Tuesday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Wednesday',
                                    status: false
                                },
                                {
                                    dayOfWeek: 'Thursday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Friday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Saturday',
                                    status: false
                                },
                                {
                                    dayOfWeek: 'Sunday',
                                    status: true
                                }
                            ]
                        },
                    ]
                },
                {
                    destination: 'Harkiv',
                    trip:  [
                        {
                            departure: '10:00',
                            stops: [
                                {
                                    title: 'Dnipro',
                                    time: '10:00'
                                },
                                {
                                    title: 'Novomoskovsk',
                                    time: '12:00'
                                },
                                {
                                    title: 'Krasnograd',
                                    time: '14:00'
                                },
                                {
                                    title: 'Harkiv',
                                    time: '16:00'
                                }
                            ],
                            schedule: [
                                {
                                    dayOfWeek: 'Monday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Tuesday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Wednesday',
                                    status: false
                                },
                                {
                                    dayOfWeek: 'Thursday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Friday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Saturday',
                                    status: false
                                },
                                {
                                    dayOfWeek: 'Sunday',
                                    status: true
                                }
                            ]
                        },
                        {
                            departure: '12:00',
                            stops: [
                                {
                                    title: 'Dnipro',
                                    time: '12:00'
                                },
                                {
                                    title: 'Novomoskovsk',
                                    time: '14:00'
                                },
                                {
                                    title: 'Krasnograd',
                                    time: '16:00'
                                },
                                {
                                    title: 'Harkiv',
                                    time: '18:00'
                                }
                            ],
                            schedule: [
                                {
                                    dayOfWeek: 'Monday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Tuesday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Wednesday',
                                    status: false
                                },
                                {
                                    dayOfWeek: 'Thursday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Friday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Saturday',
                                    status: false
                                },
                                {
                                    dayOfWeek: 'Sunday',
                                    status: true
                                }
                            ]
                        },
                        {
                            departure: '16:00',
                            stops: [
                                {
                                    title: 'Dnipro',
                                    time: '16:00'
                                },
                                {
                                    title: 'Novomoskovsk',
                                    time: '18:00'
                                },
                                {
                                    title: 'Krasnograd',
                                    time: '20:00'
                                },
                                {
                                    title: 'Harkiv',
                                    time: '21:00'
                                }
                            ],
                            schedule: [
                                {
                                    dayOfWeek: 'Monday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Tuesday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Wednesday',
                                    status: false
                                },
                                {
                                    dayOfWeek: 'Thursday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Friday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Saturday',
                                    status: false
                                },
                                {
                                    dayOfWeek: 'Sunday',
                                    status: true
                                }
                            ]
                        },
                    ]
                },
                {
                    destination: 'Poltava',
                    trip:  [
                        {
                            departure: '09:00',
                            stops: [
                                {
                                    title: 'Dnipro',
                                    time: '09:00'
                                },
                                {
                                    title: 'Krasnograd',
                                    time: '12:00'
                                },
                                {
                                    title: 'Karlivka',
                                    time: '14:00'
                                },
                                {
                                    title: 'Poltava',
                                    time: '16:00'
                                }
                            ],
                            schedule: [
                                {
                                    dayOfWeek: 'Monday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Tuesday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Wednesday',
                                    status: false
                                },
                                {
                                    dayOfWeek: 'Thursday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Friday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Saturday',
                                    status: false
                                },
                                {
                                    dayOfWeek: 'Sunday',
                                    status: true
                                }
                            ]
                        },
                        {
                            departure: '11:00',
                            stops: [
                                {
                                    title: 'Dnipro',
                                    time: '11:00'
                                },
                                {
                                    title: 'Krasnograd',
                                    time: '13:00'
                                },
                                {
                                    title: 'Karlivka',
                                    time: '15:00'
                                },
                                {
                                    title: 'Poltava',
                                    time: '18:00'
                                }
                            ],
                            schedule: [
                                {
                                    dayOfWeek: 'Monday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Tuesday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Wednesday',
                                    status: false
                                },
                                {
                                    dayOfWeek: 'Thursday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Friday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Saturday',
                                    status: false
                                },
                                {
                                    dayOfWeek: 'Sunday',
                                    status: true
                                }
                            ]
                        },
                        {
                            departure: '18:00',
                            stops: [
                                {
                                    title: 'Dnipro',
                                    time: '18:00'
                                },
                                {
                                    title: 'Krasnograd',
                                    time: '20:00'
                                },
                                {
                                    title: 'Karlivka',
                                    time: '22:00'
                                },
                                {
                                    title: 'Poltava',
                                    time: '23:00'
                                }
                            ],
                            schedule: [
                                {
                                    dayOfWeek: 'Monday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Tuesday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Wednesday',
                                    status: false
                                },
                                {
                                    dayOfWeek: 'Thursday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Friday',
                                    status: true
                                },
                                {
                                    dayOfWeek: 'Saturday',
                                    status: false
                                },
                                {
                                    dayOfWeek: 'Sunday',
                                    status: true
                                }
                            ]
                        },
                    ]
                }
            ] 
        },
    ]
    
}
export default initialState;