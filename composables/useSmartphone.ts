import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useSmartphone() {
  const isSmartphone = ref(false)

  const checkSmartphone = () => {
    isSmartphone.value =
      // window.matchMedia('(max-width: 768px)').matches && 'ontouchstart' in window
      window.matchMedia('(max-width: 768px)').matches 
    console.log('isSmartphone', isSmartphone.value)
  }

  onMounted(() => {
    checkSmartphone()
    window.addEventListener('resize', checkSmartphone)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', checkSmartphone)
  })

  return { isSmartphone }
}
