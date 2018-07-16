import * as fireKey from "../secure-stuff/firebaseKey";

export const environment = {
  production: false,
  firebase: {
    apiKey: fireKey.default,
    authDomain: "mtech-group-4.firebaseapp.com",
    databaseURL: "https://mtech-group-4.firebaseio.com",
    projectId: "mtech-group-4",
    storageBucket: "mtech-group-4.appspot.com",
    messagingSenderId: "511905911982"
  }
};
