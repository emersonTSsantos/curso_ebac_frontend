import React from 'react'
import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import Vaga from './components/Vaga'
import FormVagas from './components/FormVagas'
import GlobalStyles from './styles'
import { ThemeProvider } from 'styled-components'
import temaLight from './containers/Tema/linght'

function App() {
  const handlePesquisar = () => {
    // Implemente a lógica para pesquisar vagas
  }

  return (
    <>
      <ThemeProvider theme={temaLight}>
        <GlobalStyles />
        <Cabecalho />
        <Hero />
        <div className="container">
          <FormVagas aoPesquisar={handlePesquisar} />
          <ListaVagas />
          <Vaga
            titulo="Desenvolvedor Front-end"
            localizacao="São Paulo, SP"
            nivel="Júnior"
            modalidade="CLT"
            salarioMin={3000}
            salarioMax={5000}
            requisitos={['Experiência com React', 'Conhecimento em HTML/CSS']}
          />
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
