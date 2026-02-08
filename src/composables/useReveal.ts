import { onMounted, ref } from 'vue'

export function useReveal() {
  const el = ref<HTMLElement | null>(null)
  const visible = ref(false)

  onMounted(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          visible.value = true
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    if (el.value) observer.observe(el.value)
  })

  return { el, visible }
}
