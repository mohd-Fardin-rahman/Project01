/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// Redux Setup
import { store } from './Redux/Store';
import { Provider } from 'react-redux';

// Redux ko App me provide karne ke liye hum ko ek component banana padega aur jo App niche use hai usko apne component me lekar provider lagana padega aur niche App ki jagah wo component ko paas karna padega
// Note: ReduxApp ka jo block hai wo {} curlyBreses me nhi hai bulke wo () parathesis me hai ye dhyaan rakhna werna app render nhi hoga 
const ReduxApp = () =>(
    <Provider store={store}>
      <App /> 
    </Provider>
)

// AppRegistry.registerComponent(appName, () => App); 
// (pahle aisi thi ye line aur abhi maine change karke niche banaya ho)

// mere change karne ke baad ki line
AppRegistry.registerComponent(appName, () => ReduxApp );
