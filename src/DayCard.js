import React from 'react';
import './styles.css';


var moment = require('moment');


const DayCard = ({reading}) => {

    // variable the takes the date from the array pulled from the API and 
    // formats it using MomentJS into readable date 
    var theDate = moment(reading.dt_txt).format("ddd, MMM Do");

    // retrieve icon number and store into variable to place into URL to retrieve image from OpenWeather
    var icon = reading.weather[0].icon

    // URL that points to stored image on open weather that matches description of weather for that day
    const imgURL = `http://openweathermap.org/img/wn/${icon}@2x.png`

    console.log(imgURL)


        return (

            <div>
                <div className="box box1">
                        {/* THE DATE */}
                    <p className="nested card-text date-text">{theDate}</p>
                        {/* TEMPERATURE  */}
                    <p className="nested card-text temp-text">{Math.round(reading.main.temp)}&#176;F</p>
                        {/* WEATHER ICON */}
                    <img className="nested card-text icon-img" src={imgURL} alt="icon"></img>
                        {/* WEATHER DESCRIPTION */}
                    <p className="nested card-text desc-text">{reading.weather[0].description}</p>
                </div>
            </div>
        )
    }


export default DayCard;