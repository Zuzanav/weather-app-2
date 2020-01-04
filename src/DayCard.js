import React from 'react';
//import Moment from 'react-moment';


const DayCard = ({reading}) => {

        return (

            <div>
                <p className="card-text">{reading.weather[0].description}</p>
            </div>
        )
    }


export default DayCard;