import { useState } from 'react'
import { isAdm, isAuthenticated } from './Auth'
import { Header } from './components/Header'
import Rotas from './Routes'


export function App() {
  return (
    <>
     {
          isAuthenticated() ? (
            <Header auth={isAdm()}/>
          ) :
            ''
        }
      <Rotas />
    </>
  )
}


