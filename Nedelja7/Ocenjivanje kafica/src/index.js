import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Pozitivni from './Pozitivni'
import Neutralni from './Neutralni'
import Negativni from './Negativni'
import Ispis from './Ispis'

const App = () => {
  // Чувамо стање за сваки клик посебно
  // Почетно стање за све оцене је 0
  const [positive, setPositive] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [negative, setNegative] = useState(0)

  return (
    <div>
      <Pozitivni positive={positive} setPositive={setPositive}></Pozitivni>
      <Neutralni neutral={neutral} setNeutral={setNeutral}></Neutralni>
      <Negativni negative={negative} setNegative={setNegative}></Negativni>
      <Ispis positive={positive} neutral={neutral} negative={negative}></Ispis>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)