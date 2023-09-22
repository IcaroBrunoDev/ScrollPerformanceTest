/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {connectToDevTools} from 'react-devtools-core';

// if (__DEV__) {
//   connectToDevTools({
//     host: 'localhost',
//     port: 8097,
//   });
// }

AppRegistry.registerComponent(appName, () => App);
