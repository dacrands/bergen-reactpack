import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import Header from './Header';

import "react-big-calendar/lib/css/react-big-calendar.css";
import "../styles/form.css";

BigCalendar.momentLocalizer(moment);

class MyCalendar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            events: [
                {
                  start: new Date(2018, 7, 21),
                  end: new Date(2018, 7, 25),
                  title: "Running Start Program BOOT CAMPS"
                },
                {
                    start: new Date(2018, 7, 9, 13, 0, 0),
                    end: new Date(2018, 7, 9, 15, 0, 0),                  
                    title: "Mini STEM Research Conference"
                },
                {
                  start: new Date(2018, 7, 21, 9, 0, 0),
                  end: new Date(2018, 7, 21, 12, 0, 0),
                  title: "Intermediate Algebra - MAT-160 (Room C-316)"
                },
                {
                  start: new Date(2018, 7, 22, 9, 0, 0),
                  end: new Date(2018, 7, 22, 12, 0, 0),
                  title: "Intermediate Algebra - MAT-160 (Room C-316)"
                },
                {
                  start: new Date(2018, 7, 23, 9, 0, 0),
                  end: new Date(2018, 7, 23, 12, 0, 0),
                  title: "Intermediate Algebra - MAT-160 (Room C-316)"
                },
                {
                  start: new Date(2018, 7, 24, 9, 0, 0),
                  end: new Date(2018, 7, 24, 12, 0, 0),
                  title: "Intermediate Algebra - MAT-160 (Room C-316)"
                },                
                {
                  start: new Date(2018, 7, 21, 13, 0, 0),
                  end: new Date(2018, 7, 21, 16, 0, 0),
                  title: "Pre-Calculus - MAT-180 (Room C-314)"
                },
                {
                  start: new Date(2018, 7, 22, 13, 0, 0),
                  end: new Date(2018, 7, 22, 16, 0, 0),
                  title: "Pre-Calculus - MAT-180 (Room C-314)"
                },
                {
                  start: new Date(2018, 7, 23, 13, 0, 0),
                  end: new Date(2018, 7, 23, 16, 0, 0),
                  title: "Pre-Calculus - MAT-180 (Room C-314)"
                },
                {
                  start: new Date(2018, 7, 24, 13, 0, 0),
                  end: new Date(2018, 7, 24, 16, 0, 0),
                  title: "Pre-Calculus - MAT-180 (Room C-314)"
                },                
                {
                  start: new Date(2018, 7, 21, 13, 0, 0),
                  end: new Date(2018, 7, 21, 15, 0, 0),
                  title: "Introduction to Chemistry - CHM-100 (Room C-316)"
                },
                {
                  start: new Date(2018, 7, 22, 13, 0, 0),
                  end: new Date(2018, 7, 22, 15, 0, 0),
                  title: "Introduction to Chemistry - CHM-100 (Room C-316)"
                },
                {
                  start: new Date(2018, 7, 23, 13, 0, 0),
                  end: new Date(2018, 7, 23, 15, 0, 0),
                  title: "Introduction to Chemistry - CHM-100 (Room C-316)"
                },
                {
                  start: new Date(2018, 7, 24, 13, 0, 0),
                  end: new Date(2018, 7, 24, 15, 0, 0),
                  title: "Introduction to Chemistry - CHM-100 (Room C-316)"
                },                
            ],
            month: 0,
            day: 0,
            title: ''
        }
    }

    handleMonthChange(e) {
        this.setState({ month:e.target.value })
    }

    handleDayChange(e) {
        {console.log(e)}
        this.setState({ day:e.target.value })
    }

    handleTitleChange(e) {
        this.setState({ title:e.target.value })
    }

    handleSubmit(event) {
        let newEvent = {
            start: new Date(2018, this.state.month, this.state.day, 0, 0, 0),
            end: new Date(2018, this.state.month, this.state.day, 0, 0, 0),
            title: this.state.title
        };

        this.setState(
            {
                events: [...this.state.events, newEvent]
            }            
            
        )

        console.log(this.state.events)
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <Header title="Events" />
                <div className="container" style={{margin: "30px auto"}}>
                    <BigCalendar
                        defaultDate={new Date()}
                        defaultView="agenda"
                        events={this.state.events}
                        style={{ height: "100vh" }}
                        onSelectEvent={event => alert(`${event.title} \n START: ${event.start} \n END: ${event.end}`)}
                        scrollToTime={new Date(1970, 1, 1, 6)}                        
                    />

                    {/* <form className={"form__container"} onSubmit={this.handleSubmit.bind(this)}>
                        <div className="title">
                            <h1>Make an event</h1>
                        </div>
                        <label className={"form__item"} htmlFor="day">
                            Title:
                            <input type="text" onChange={this.handleTitleChange.bind(this)}/>
                        </label>  
                        <div className="form__item-select">
                            <label className={"form__item"} htmlFor="month">
                                Month
                                <select className={"form__item"} name="month" id="" onChange={this.handleMonthChange.bind(this)}>
                                    <option value="0">Jan</option>
                                    <option value="1">Feb</option>
                                    <option value="2">Mar</option>
                                    <option value="3">Apr</option>
                                    <option value="4">May</option>
                                    <option value="5">Jun</option>
                                    <option value="6">Jul</option>
                                    <option value="7">Aug</option>
                                    <option value="8">Sep</option>
                                    <option value="9">Oct</option>
                                    <option value="10">Nov</option>
                                    <option value="11">Dev</option>
                                </select>
                            </label>
                            <label className={"form__item"} htmlFor="day">
                                Day
                                <select className={"form__item"} name="day" id="" onChange={this.handleDayChange.bind(this)}>
                                    {
                                        [...Array(31)].map((i, x) => {
                                            return <option key={i+1}> {x+1} </option>
                                        })
                                    }
                                </select>
                            </label>
                            <label htmlFor="hour" className="form__item">
                                Hour
                                <select name="hour" id="" className="form__item">
                                    <option value="0">8 AM</option>
                                    <option value="1">9 AM</option>
                                    <option value="2">2 AM</option>
                                    <option value="3">3 AM</option>
                                    <option value="4">4 AM</option>
                                    <option value="5">5 AM</option>
                                    <option value="6">6 AM</option>
                                </select>
                            </label>
                            <label htmlFor="hour" className="form__item">
                                Minute
                                <select name="hour" id="" className="form__item">
                                    {[0,5,10,15,30,45].map((i, x) => {
                                        return <option key={i} value={i}>{i}</option>
                                    })}                                                                       
                                </select>
                            </label>
                        </div>  
                                                                 
                        <input className={"form__button"} type="submit" value="Submit" />
                    </form> */}
                </div>
            </div>
        )
    }
} 
    


export default MyCalendar;
