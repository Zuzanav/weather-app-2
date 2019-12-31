import React from 'react';
//import keyConfig from './apiKeys';




class WeekContainer extends React.Component {
    // set the State to be empty array of full weather data and daily weather data (instead of every 3 hours)
    state = {
        fullData: [],
        dailyData: []
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
            dailyData: dailyData

            //console log the array of 5 days of weather prediction
          }, () => console.log(this.state.dailyData))
        })
      }

    render() {

        const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?zip=92101&units=imperial&APPID=`


        return (
            <div>
                <p> Hello World </p>
            </div>
        )
    }

}

export default WeekContainer;