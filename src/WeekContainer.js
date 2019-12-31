import React from 'react';
import keyConfig from './apiKeys';




class WeekContainer extends React.Component {

    componentDidMount = () => {

        const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?zip=92101&units=imperial&APPID=${keyConfig.myKey}`
    
        fetch(weatherURL)
        .then(res => res.json())
        .then(data => console.log("Data List Loaded", data.list))
        
    }

    render() {

        const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?zip=92101&units=imperial&APPID=${keyConfig.myKey}`


        return (
            <div>
                <p> Hello World </p>
            </div>
        )
    }

}

export default WeekContainer;