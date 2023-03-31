import React,{useState} from 'react'
import styles from '../css/weathercard.module.css'

const WeatherCardDetail = (props) => {
  const {weatherdata} = props
  const [temprature,setTemprature] = useState({temp:weatherdata?.main?.temp-273.15, unit:'C'})
  const convertToFarenheit = () => {
    if(temprature.unit === 'C') {
      setTemprature({temp:temprature.temp * (9/5) + 32 , unit:'F'}) 
    }
    if(temprature.unit === 'F') {
      setTemprature({temp:(temprature.temp - 32) * 5/9 , unit:'C'}) 
    }
  }
   return (
    <div className={styles.conatiner}>
      {
        weatherdata && (
          <h3>{weatherdata.name}</h3>
        )
      }
      <div>
      {
        weatherdata && weatherdata.main && (
          <>
          <h3 className={styles.text}>Temp:{temprature.temp.toFixed(2)} {temprature.unit}</h3>
          <h3 className={styles.text}>Humidity:{weatherdata.main.humidity}</h3>
          </>
        )
      }
      {
        weatherdata && weatherdata.wind && (
          <>
          <h3 className={styles.text}>Wind Speed :{weatherdata.wind.speed}</h3>
          </>
        )
      }
      <button onClick={convertToFarenheit}>Convert temprature</button>
      </div>
    </div>
  )
}

export default WeatherCardDetail