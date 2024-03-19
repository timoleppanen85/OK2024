import { useState } from 'react'
import NameForm from './NameForm'
import './App.css'

function App() {
  const [state, setState] = useState({
    greeting: "No greeting yet."
  })

  const setGreeting = (name) => {
    setState({
      greeting: "Hello " + name
    })
  }

  return (
    <>
      <NameForm setGreeting={setGreeting} />
      <h2>{state.greeting}</h2>
    </>
  )
}

export default App
