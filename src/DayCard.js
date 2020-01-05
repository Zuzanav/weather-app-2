import React from 'react';
import './styles.css'
var moment = require('moment');


const DayCard = ({reading}) => {

var theDate = moment(reading.dt_txt).format("dddd, MMM Do");

        return (

            <div className="wrapper">
                <p className="card-text date-text">{theDate}</p>
                <p className="card-text desc-text">{reading.weather[0].description}</p>
                <p className="card-text temp-text">{Math.round(reading.main.temp)}</p>
            </div>
        )
    }


export default DayCard;