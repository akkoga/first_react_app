import React from 'react'

import './Card.css'

const HIDDEN_SYMBOL = '❓'

//composant carte
/*
card indique le symbole a afficher
feedback indique si la carte est visible ou non
pourla div on met des accolades car jsx ne peut pas faire de dynamique sans
les backquotes sont utilisés pour la syntaxe es2015 et permette de mettre des valeurs dynamiques
*/
const Card = ({ card, feedback }) => (
    <div className={`card ${feedback}`}>
      <span className="symbol">
        {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
      </span>
    </div>
  )

export default Card