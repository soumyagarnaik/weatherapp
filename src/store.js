import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    weatherDataReducer
} from './reducers/WeatherDataReducer'

const reducer = combineReducers({
   weatherData: weatherDataReducer,
})


const initialState = {
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store