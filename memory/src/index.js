import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//creation d'un composant
function CoolComponent() {
  //retourne un DOM virtuel react grace a react.createElement
  /*
  Le premier element correspond au nom du composant
  le deuxieme correspond a une serie d'attribut
  le troisieme correspond au contenu à afficher
  */
  return React.createElement('p', {}, 'hello world !!!')
}

//permet d'afficher le composant dans la page web
ReactDOM.render(
  React.createElement(CoolComponent),
  document.getElementById('root')
)
//----------------------------------------

//creation d'un composant pour le h1
function FirstTitle(){
  return React.createElement('h1', {}, 'First title')
}

ReactDOM.render(
  React.createElement(FirstTitle),
  document.getElementById('titre')
)
//---------------------------------------

//creation d'un composant avec jsx
function ComponentJsx(){
  return <p>jsx component</p>
}

ReactDOM.render(
  <ComponentJsx />,
  document.getElementById('jsxComponent')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
