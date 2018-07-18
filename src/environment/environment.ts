import * as fireKey from "../../secure-stuff/firebaseKey";

export const environment = {
  production: false,
  firebase: {
    apiKey: fireKey.default,
    authDomain: "angulargroupproject.firebaseapp.com",
    databaseURL: "https://angulargroupproject.firebaseio.com",
    projectId: "angulargroupproject",
    storageBucket: "angulargroupproject.appspot.com",
    messagingSenderId: "40781239708"
  }
};
