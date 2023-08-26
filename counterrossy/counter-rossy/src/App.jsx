import React, { useState } from 'react'
import { Header, Button, Counter, Footer } from './components/'

export function App () {
  const [counter, setCounter] = useState(0)

  const add = () => {
    setCounter(counter + 1)
  }

  const reset = () => {
    setCounter(0)
  }

  const substract = () => {
    setCounter(counter > 0 ? counter - 1 : counter)
  }

  console.log(counter)

  return (
    <>

      <Header />
      <Counter value={counter} />
      <Button toAdd={add} toReset={reset} toSubstract={substract} />
      <Footer />

    </>
  )
}
