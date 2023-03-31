import React,{useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {getWeatherDetails} from '../actions/WeatherAction'
import WeatherCardDetail from '../components/WeatherCardDetail';
import { LocationData } from '../LocationData';

const HomePage = () => {
  const [latitude, setLatitude] = useState([]);
  const [longitude, setLongitude] = useState([]);
  const [searchedText, setSearchedText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch()
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
    });
  }, []);

  useEffect(()=> {
      if(typeof(latitude) === 'number' && typeof(longitude) === 'number' ) {
        dispatch(getWeatherDetails(latitude,longitude))
      }
  },[latitude,longitude,dispatch])

  const weatherData = useSelector((state) => state.weatherData)
  const { loading, error, weatherdata } = weatherData
  const handleTextChange =(e) => {
    setSearchedText(e.target.value)
  }
  const getLocationDetails = () => {
    const location = LocationData.find(data => data.location.toLowerCase() === searchedText)
    if(location) {
      setLatitude(Number(location.latitude))
      setLongitude(Number(location.longitude))
    } else {
      setErrorMessage('No City Found')
    }
 }
  return (
    <div>
      <h2>Today Weather</h2>
      <div>
        <h4>Search City</h4>
        <input type='text' onChange={handleTextChange}/>
        <h6>{errorMessage}</h6>
        <button onClick={getLocationDetails}>Get</button>
      </div>
      {
      (loading === true) ? (
          <h6>...Loading</h6>
      ) : (
        <WeatherCardDetail weatherdata={weatherdata} />
      )
      }
    </div>
  )
}

export default HomePage