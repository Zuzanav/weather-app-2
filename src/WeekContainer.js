import React from 'react';
import apiConfig from './apiKeys';
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

        var weatherURL = `http://api.openweathermap.org/data/2.5/forecast?zip=92101&units=imperial&APPID=${apiConfig.owmKey}`
    
        // fetch data from the API by calling on the above URL 
        fetch(weatherURL)
        // then, take response and place into json array
        .then(res => res.json())
        // take data...
        .then(data => {
            // and add filtered data to new variable dailyData
            // this data filters out only the weather for the time 18:00 so that we only get one weather prediction a day,
            // as opposed to a weather prediction for every 3 hours. 
          const dailyData = data.list.filter(reading => reading.dt_txt.includes("21:00:00"))

          // set the state for the dailyData to include the array of 5 days 
          this.setState({
            fullData: data.list,
            dailyData: dailyData,
            cityName: data.city.name,
            query: weatherURL
            
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

      queryChange = (event) => {
          this.setState({query: event.target.value}) 
          //weatherURL = `http://api.openweathermap.org/data/2.5/forecast?zip=${zip}&units=imperial&APPID=${apiConfig.owmKey}`
      }


    render() {

       // const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?zip=92101&units=imperial&APPID=${apiConfig.owmKey}`


        return (
            <div className="container">
                <h1> 5 Day Forecast </h1>
                <p className="city-name-text">{this.state.cityName}</p>

{/* 
                <form>
                    <label>
                        <input placeholder="zipcode" type="text" name="name" />
                    </label>
                    <input type="submit" value= {this.state.value} onChange={this.queryChange} />
                </form> */}
                

                <div className="wrapper">
                    {this.formatDayCards()}
                </div>
            </div>
        )
    }

}



export default WeekContainer;