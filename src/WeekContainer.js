import React from 'react';
//import keyConfig from './apiKeys';
import DayCard from './DayCard.js'
import './styles.css'


class WeekContainer extends React.Component {
    // set the State to be empty array of full weather data and daily weather data (instead of every 3 hours)
    state = {
        fullData: [],
        dailyData: [],
        cityName: []
    }

    // when the component mounts in the DOM, make a call to fetch data using API Key and specific zip code 
    componentDidMount = () => {

        const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?zip=92101&units=imperial&APPID=`
    
        // fetch data from the API by calling on the above URL 
        fetch(weatherURL)
        // then, take response and place into json array
        .then(res => res.json())
        // take data...
        .then(data => {
            // and add filtered data to new variable dailyData
            // this data filters out only the weather for the time 18:00 so that we only get one weather prediction a day,
            // as opposed to a weather prediction for every 3 hours. 
          const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))

          // set the state for the dailyData to include the array of 5 days 
          this.setState({
            fullData: data.list,
            dailyData: dailyData,
            cityName: data.city.name
            
            //console log the array of 5 days of weather prediction
          }, () => console.log(this.state.dailyData, this.state.cityName))
        })
      }

      formatDayCards = () => {
        return this.state.dailyData.map((reading, index) => 
        <DayCard 
            reading={reading} 
            key={index} 
        />)
      }
    

    render() {

        const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?zip=92101&units=imperial&APPID=`


        return (
            <div>
                <p className="city-name-text">{this.state.cityName}</p>
                {this.formatDayCards()}

            </div>
        )
    }

}

export default WeekContainer;