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
const Card = ({ card, feedback, onClick }) => (
    <div className={`card ${feedback}`} onClick={() => onClick(card, feedback)}>
      <span className="symbol">
        {/* si le feedback est hidden alors se sera hidden symbole qui sera utilisé */}
        {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
      </span>
    </div>
  )

export default Card