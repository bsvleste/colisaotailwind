import { useState } from 'react'
import { Header } from './componentes/Header'


export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <h2 className='mt-25 text-slate-200'>Projeto em Produção</h2>
    </>
  )
}


