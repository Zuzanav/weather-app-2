import React from 'react';
import './styles.css'
var moment = require('moment');


const DayCard = ({reading}) => {

var theDate = moment(reading.dt_txt).format("dddd, MMM Do");

        return (

            <div>
                <div className="box box1">
                    <p className="nested card-text date-text">{theDate}</p>
                    <p className="nested card-text desc-text">{reading.weather[0].description}</p>
                    <p className="nested card-text temp-text">{Math.round(reading.main.temp)}&#176;F</p>
                </div>
            </div>
        )
    }


export default DayCard;