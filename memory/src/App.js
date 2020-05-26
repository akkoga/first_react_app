import React from 'react';
import Card from './Card'
import GuessCount from './GuessCount'

class App extends React.Component {
  //fonction pour le onclick sur une carte
  cardClick(card){
    console.log(card, "clicked")
  }

  render() {
    return (
      <div className="memory">
        <GuessCount guesses={0} />
        {/* pas besoin de passer en parametre la valeur card car elle est deja dans la balise card */}
        {/* le this permet de designer CETTE fonction ici pour cardClick */}
        <Card card="😀" feedback="hidden" onClick = {this.cardClick}/>
        <Card card="🎉" feedback="justMatched" onClick = {this.cardClick}/>
        <Card card="💖" feedback="justMismatched" onClick = {this.cardClick}/>
        <Card card="🎩" feedback="visible" onClick = {this.cardClick}/>
        <Card card="🐶" feedback="hidden" onClick = {this.cardClick}/>
        <Card card="🐱" feedback="justMatched" onClick = {this.cardClick}/>
      </div>
    )
  }
}
export default App