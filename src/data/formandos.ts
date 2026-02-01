export type Formando = {
  id: string
  nome: string
  primeiroNome: string
  bio: string
  fotos: string[]
  whatsapp: string
}

export const formandos: Record<string, Formando> = {
  rafaella: {
    id: 'rafaella',
    nome: 'Rafaella Quaresma Lourenço',
    primeiroNome: 'Rafaella',
    bio: 'Apaixonada pelo espaço, gatinhos e academia.',
    fotos: [
      '/images/formandos/joana/1.jpg',
      '/images/formandos/joana/2.jpg',
      '/images/formandos/joana/3.jpg'
    ],
    whatsapp: 'https://wa.me/5551999999999'
  },

  gabriel: {
    id: 'gabriel',
    nome: 'Gabriel Rocha de Souza',
    primeiroNome: 'Gabriel',
    bio: 'Focado em controle industrial e sistemas embarcados.',
    fotos: [
      '/images/formandos/jorge/1.jpg'
    ],
    whatsapp: 'https://wa.me/5551988888888'
  }
}
