import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { firebase } from './firebaseConfig';

//a esta configurado la persona tiene que ver como usa la variable firebase

const writeToDatabase = () => { 
  //variables para tu producto 
  const [data, setData] = useState(null);
  
  //esta aprte usa la bdd
  const dbRef = firebase.database.ref('productos'); //PRODUCTOS es el esquema en donde se va a guardar

  //EJEMPLO es lo que se va a guardar en la bdd
  dbRef.on('EJEMPLO', snapshot =>{
    setData(snapshot.val())
  });
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
