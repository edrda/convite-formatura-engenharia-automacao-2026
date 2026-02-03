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
      '/images/formandos/rafaella/rafaella.png'
    ],
    whatsapp: 'https://wa.me/5553991487704?text=Oi%2C%20Rafa!%20Recebi%20seu%20convite%20e%20gostaria%20de%20confirmar%20a%20minha%20presen%C3%A7a%20na%20sua%20formatura.%20%0ADia%2007%2F03%2F2026%20%C3%A0s%2017h%2C%20no%20CIDEC.'
  },

  gabriel: {
    id: 'gabriel',
    nome: 'Gabriel Rocha de Souza',
    primeiroNome: 'Gabriel',
    nacionalidade: 'Rio Grande/RS',
    bio: 'Focado em controle industrial e sistemas embarcados.',
    descricao: 'Desejo contribuir para a automação de processos industriais. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.',
    fotos: [
      '/images/formandos/gabriel/gabriel.png'
    ],
    whatsapp: 'https://wa.me/5553981609938?text=Oi%2C%20Gabriel!%20Recebi%20seu%20convite%20e%20gostaria%20de%20confirmar%20a%20minha%20presen%C3%A7a%20na%20sua%20formatura.%20%0ADia%2007%2F03%2F2026%20%C3%A0s%2017h%2C%20no%20CIDEC.'
  }
}
