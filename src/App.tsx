import { useContext, useState } from 'react'
import { isAdm, isAuthenticated } from './Auth'
import { Header } from './components/Header'
import { AuthContext, AuthProvider } from './contexts/AuthContexts'
import Rotas from './Routes'


export function App() {
  const { isAuthenticated } = useContext(AuthContext)
  return (
    <>
      {
        isAuthenticated ? (
          <Header />
        ) :
          ''
      }
      <Header />
      <Rotas />
    </>
  )
}


