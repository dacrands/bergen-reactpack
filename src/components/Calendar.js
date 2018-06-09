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
                  start: new Date(),
                  end: new Date(moment().add(3, "days")),
                  title: "STEM Summit"
                },
                {
                  start: new Date(2018, 5, 18, 13, 0, 0),
                  end: new Date(2018, 5, 18, 14, 0, 0),
                  title: "meeting"
                },
                {
                  start: new Date(2018, 5, 1, 0, 0, 0),
                  end: new Date(2018, 5, 0, 0, 0, 0),
                  title: "Running Start"
                },
                {
                  start: new Date(2018, 5, 12, 9, 0, 0),
                  end: new Date(2018, 5, 12, 10, 30, 0),
                  title: "We gotta do this"
                },
                {
                  start: new Date(2018, 5, 12, 11, 0, 0),
                  end: new Date(2018, 5, 12, 12, 0, 0),
                  title: "Something else"
                },
                {
                  start: new Date(2018, 5, 12, 15, 0, 0),
                  end: new Date(2018, 5, 12, 16, 0, 0),
                  title: "Another one"
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
                        defaultView="month"
                        events={this.state.events}
                        style={{ height: "100vh" }}
                        onSelectEvent={event => alert(event.title)}
                        scrollToTime={new Date(1970, 1, 1, 6)}                        
                    />

                    <form className={"form__container"} onSubmit={this.handleSubmit.bind(this)}>
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
                                    <option value="0">1</option>
                                    <option value="1">2</option>
                                    <option value="2">3</option>
                                    <option value="3">4</option>
                                    <option value="4">5</option>
                                    <option value="5">6</option>
                                    <option value="6">7</option>
                                    <option value="7">8</option>
                                    <option value="8">9</option>
                                    <option value="9">10</option>
                                    <option value="10">11</option>
                                    <option value="11">12</option>
                                    <option value="12">13</option>
                                    <option value="13">14</option>
                                    <option value="14">15</option>
                                    <option value="15">16</option>
                                </select>
                            </label>
                            <label htmlFor="hour" className="form__item">
                                Hour
                                <select name="hour" id="" className="form__item">
                                    <option value="0">12 AM</option>
                                    <option value="1">1 AM</option>
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
                                    <option value="0">0</option>
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="15">15</option>
                                    <option value="30">30</option>                                    
                                    <option value="45">45</option>                                    
                                </select>
                            </label>
                        </div>  
                                                                 
                        <input className={"form__button"} type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        )
    }
} 
    


export default MyCalendar;