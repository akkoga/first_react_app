import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

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
// ReactDOM.render(
//   React.createElement(CoolComponent),
//   document.getElementById('root')
// )
//----------------------------------------

//creation d'un composant pour le h1
//premieres props
//le parametre name a comme valeur par defaut nom
//si laissez sans  ='value' alors la valeur par defaut sera null
function FirstTitle({name = 'nom'}){
  return <span>first title name param => {name}</span>
}

ReactDOM.render(
  <div>
    <h1><FirstTitle name="waifu" /></h1>
    <h2><FirstTitle /></h2>
  </div>,
  document.getElementById('titre')
)
//---------------------------------------

//creation d'un composant avec jsx

// Avec JSX
//<User first="John" last="Smith" />

// sans JSX
//React.createElement(User, { first: 'John', last: 'Smith' })
function ComponentJsx(){
  return <p>jsx component</p>
}

ReactDOM.render(
  <ComponentJsx />,
  document.getElementById('jsxComponent')
)

//---------------------------------------




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
