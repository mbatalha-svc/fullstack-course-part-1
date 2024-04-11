
/*
  const Hello = (props) => {
  console.log(props)

  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }

  return (
    <div>
      <p>Hello, {props.name}! You are {props.age} years old.</p>
      <p>So you are probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Matheus" age={25}/>
      <Hello name="all" age="every"/>
    </div>
  )
}
*/

import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)    
  const setToZero = () => setCounter(0)
  
  return (
    <div>
      <div>{counter}</div>
      <button onClick={increaseByOne}>        
        plus
      </button>
      <button onClick={setToZero}>        
        zero
      </button>
    </div>
  )
}