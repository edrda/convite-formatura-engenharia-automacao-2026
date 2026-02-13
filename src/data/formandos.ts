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
    descricao: 'Para quem sempre olhou para o céu buscando respostas, a engenharia de automação foi o meu ponto de partida. Me encantei pela versatilidade de uma área que se faz presente desde a precisão de um marca-passo até um voo a mil pés de altura. Levo como lema, após os anos de graduação, que a automação não existe para substituir o ser humano, mas para ser a ferramenta que potencializa nossa capacidade de cuidar, proteger e ir além. Inicio minha carreira com o saber de que a tecnologia precisa estar aliada à ética e ao compromisso de ser uma eterna aprendiz, transformando cada novo desafio em um degrau para a excelência. Sou a soma dos meus estudos, das pessoas (e pets) que amo, e sem sombra de dúvidas, da vontade incessante de saber os porquês. Dito isso, o céu não é o limite; é o meu próximo objetivo.',
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
    descricao: 'Movido pela curiosidade, trilhei meu caminho na EAUTO com uma paixão pela inovação. Entre linhas de código e desenvolvimento de sistemas, descobri que a engenharia vai além da técnica: trata-se de criar soluções que impactam vidas. Entusiasta da robótica e das infinitas possibilidades tecnológicas, encontrei nesse percurso o meu propósito. Acredito no poder da automação para simplificar o complexo e, ao me formar, celebro anos de dedicação. Dou início agora a uma carreira pautada pela ética, pela inovação e pelo constante desejo de evoluir.',
    fotos: [
      '/images/formandos/gabriel/gabriel.png'
    ],
    whatsapp: 'https://wa.me/5553981609938?text=Oi%2C%20Gabriel!%20Recebi%20seu%20convite%20e%20gostaria%20de%20confirmar%20a%20minha%20presen%C3%A7a%20na%20sua%20formatura.%20%0ADia%2007%2F03%2F2026%20%C3%A0s%2017h%2C%20no%20CIDEC.'
  }
}
