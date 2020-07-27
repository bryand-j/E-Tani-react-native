/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

//react-native bundle --dev false --platform android --entry-file index.js --bundle-output .\android\app\build\intermediates\assets\debug\index.android.bundle --assets-dest .\android\app\build\intermediates\res\merged\debug
//android:usesCleartextTraffic="true"