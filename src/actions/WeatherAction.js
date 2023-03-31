import {WEATHER_DATA_REQUEST,WEATHER_DATA_SUCESS,WEATHER_DATA_FAIL} from '../constants/weatherConstants'
import axios from 'axios'

export const getWeatherDetails = (lat,lon) => async (
    dispatch
  ) => {
    try {
      dispatch({ type: WEATHER_DATA_REQUEST })
       const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=70181bd59904e579ad7f71cd5aced837`
       )
      dispatch({
        type: WEATHER_DATA_SUCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: WEATHER_DATA_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }