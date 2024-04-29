// FormVagas.tsx
import React, { FormEvent } from 'react'
import { Formulario, Campo, BotaoPesquisar } from './styles'

type Props = {
  aoPesquisar: () => void // Removido o argumento 'termo'
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar() // Não é mais necessário passar 'termo'
  }

  return (
    <Formulario onSubmit={aoEnviarForm}>
      <Campo placeholder="Front-end, fullstack, node, design" type="search" />
      <BotaoPesquisar type="submit">Pesquisar</BotaoPesquisar>
    </Formulario>
  )
}

export default FormVagas
