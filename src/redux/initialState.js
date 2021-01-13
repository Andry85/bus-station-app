const initialState = {
    selectedFrom: '--Choose departure station--',
    selectedTo: '--Choose destination station--',
    selectedTime: '--Choose departure time--',
    departureList:[],
    destinationList: [],
    weekDay: '',
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
                                    title: 'Zhitomir',
                                    time: '12:00'
                                },
                                {
                                    title: 'Bila Cerkva',
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
                                    title: 'Zhitomir',
                                    time: '14:00'
                                },
                                {
                                    title: 'Bila Cerkva',
                                    time: '18:00'
                                },
                                {
                                    title: 'Kiev',
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
                                    title: 'Zhitomir',
                                    time: '18:00'
                                },
                                {
                                    title: 'Bila Cerkva',
                                    time: '20:00'
                                },
                                {
                                    title: 'Kiev',
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
                                    title: 'Zhitomir',
                                    time: '12:00'
                                },
                                {
                                    title: 'Bila Cerkva',
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
                            departure: '16:00',
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
                                    title: 'Zhitomir',
                                    time: '12:00'
                                },
                                {
                                    title: 'Bila Cerkva',
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
                            departure: '16:00',
                            stops: [
                                {
                                    title: 'Dnipro',
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
                                    title: 'Zhitomir',
                                    time: '12:00'
                                },
                                {
                                    title: 'Bila Cerkva',
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
                                    title: 'Zhitomir',
                                    time: '14:00'
                                },
                                {
                                    title: 'Bila Cerkva',
                                    time: '16:00'
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
                    destination: 'Donetsk',
                    trip:  [
                        {
                            departure: '09:00',
                            stops: [
                                {
                                    title: 'Dnipro',
                                    time: '09:00'
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
                            departure: '11:00',
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
                            departure: '18:00',
                            stops: [
                                {
                                    title: 'Dnipro',
                                    time: '18:00'
                                },
                                {
                                    title: 'Zhitomir',
                                    time: '19:00'
                                },
                                {
                                    title: 'Bila Cerkva',
                                    time: '22:00'
                                },
                                {
                                    title: 'Kiev',
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