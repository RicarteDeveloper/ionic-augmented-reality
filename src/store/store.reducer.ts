//import { routerReducer } from "@angular-redux/router";
//import { composeReducers, defaultFormReducer } from "@angular-redux/form";

import { combineReducers } from "redux";
//import { routerReducer } from '@angular-redux/router';

//import { persistReducer } from 'redux-persist';

import { AppState, INITIAL_STATE } from './store.model';

import { spinnerReducer } from './spinner/spinner.reducer';
import { splashReducer } from './splash/splash.reducer';
import { gpsReducer } from "./gps/gps.reducer";
import { accelerometerReducer } from "./accelerometer/accelerometer.reducer";
import { gyroscopeReducer } from "./gyroscope/gyroscope.reducer";
import { magnetometerReducer } from "./magnetometer/magnetometer.reducer";
//import { poiReducer } from "./poi-api/poi.reducer";
import { arReducer } from './ar-infos/ar.reducer';

export default function reduceReducers(...reducers)
{
  return (previous, current) => reducers.reduce((p, r) => r(p, current), previous);
}

export function rootReducer(storage)
{
  /*const storagePersistConfig = {
    key: 'storage',
    storage,
    blacklist: []
  };
  const storagePersistedReducer = persistReducer(storagePersistConfig, storageReducer);

  const encryptor = createEncryptor({
    secretKey: '3159b4d15e0c8d3f07254e1b288d9156',
    onError: function (error)
    {
      console.log("An error occured: ", error);
    }
  });
  const secureStoragePersistConfig = {
    key: 'secureStorage',
    storage,
    transform: [encryptor],
    blacklist: []
  };
  const secureStoragePersistedReducer = persistReducer(secureStoragePersistConfig, secureStorageReducer);*/

  return reduceReducers(
    combineReducers({
      spinner: spinnerReducer,
      splash: splashReducer,
      gps: gpsReducer,
      accelerometer: accelerometerReducer,
      gyroscope: gyroscopeReducer,
      magnetometer: magnetometerReducer,
      //poi: poiReducer,
      ar: arReducer
    }),
    mainReducer
  );
}

export function mainReducer(state: AppState = INITIAL_STATE, action: any): any
{
  return state;
}