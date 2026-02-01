import { ref, computed, onMounted } from 'vue'
import { formandos, type Formando } from '../data/formandos'

const formandoAtual = ref<Formando | null>(null)

export function useFormando() {
  function carregarFormando() {
    const params = new URLSearchParams(window.location.search)
    const aluno = params.get('aluno')

    if (aluno && formandos[aluno]) {
      formandoAtual.value = formandos[aluno]
    } else {
      formandoAtual.value = null
    }
  }

  onMounted(carregarFormando)

  const existeFormando = computed(() => !!formandoAtual.value)

  return {
    formandoAtual,
    existeFormando
  }
}
