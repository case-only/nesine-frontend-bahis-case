import React from 'react'
import { BasketProvider } from './contexts/basket'
import Basket from './components/Basket/Basket'
import BetsList from './components/BetsList/BetsList'
const App = () => {
  return (
    <BasketProvider>
      <BetsList />
      <Basket />
    </BasketProvider>
  )
}

export default App
