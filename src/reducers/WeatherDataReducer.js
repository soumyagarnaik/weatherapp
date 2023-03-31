import {WEATHER_DATA_REQUEST,WEATHER_DATA_SUCESS,WEATHER_DATA_FAIL} from '../constants/weatherConstants'


  export const weatherDataReducer = (state = { weatherdata : [] }, action) => {
    switch (action.type) {
      case WEATHER_DATA_REQUEST:
        return { loading: true, weatherdata:[] }
      case WEATHER_DATA_SUCESS:
        return {
          loading: false,
          weatherdata: action.payload,
        }
      case WEATHER_DATA_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }