export type Formando = {
  id: string
  nome: string
  primeiroNome: string
  bio: string
  nacionalidade: string
  descricao: string
  fotos: string[]
  whatsapp: string
}

export const formandos: Record<string, Formando> = {
  rafaella: {
    id: 'rafaella',
    nome: 'Rafaella Quaresma Lourenço',
    primeiroNome: 'Rafaella',
    nacionalidade: 'Rio Grande/RS',
    bio: 'Apaixonada pelo espaço, gatinhos e academia.',
    descricao: 'Sonho em trabalhar com sistemas espaciais e satélites. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.',
    fotos: [
      '/src/assets/images/formandos/rafaella/rafaella.png'
    ],
    whatsapp: 'https://wa.me/5551999999999'
  },

  gabriel: {
    id: 'gabriel',
    nome: 'Gabriel Rocha de Souza',
    primeiroNome: 'Gabriel',
    nacionalidade: 'Rio Grande/RS',
    bio: 'Focado em controle industrial e sistemas embarcados.',
    descricao: 'Desejo contribuir para a automação de processos industriais. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.',
    fotos: [
      '/src/assets/images/formandos/gabriel/gabriel.png'
    ],
    whatsapp: 'https://wa.me/5551988888888'
  }
}
