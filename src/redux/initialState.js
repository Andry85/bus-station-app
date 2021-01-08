const initialState = {
    selectedFrom: '--Choose departure station--',
    selectedTo: '--Choose destination station--',
    departureList:[],
    destinationList: [],
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
                },
                {
                    destination: 'Harkiv',
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
                },
                {
                    destination: 'Donetsk',
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
    ]
    
}
export default initialState;