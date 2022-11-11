import { useContext } from 'react'
import { QueryClientProvider } from 'react-query'
import { Header } from './components/Header'
import { AuthContext } from './contexts/AuthContexts'
import Rotas from './Routes'
import { queryClient } from './services/queryClient'
import { ReactQueryDevtools } from 'react-query/devtools'

export function App() {
  const { isAuthenticated } = useContext(AuthContext)
  return (
    <QueryClientProvider client={queryClient}>
      {
        isAuthenticated ? (
          <Header />
        ) :
          ''
      }
      <Rotas />
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}


