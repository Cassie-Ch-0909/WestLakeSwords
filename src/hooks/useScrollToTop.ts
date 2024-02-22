import { onMounted } from 'vue'
import { useGlobalContext } from '@/hooks/useGlobalContext'

function useScrollToTop() {
  const globalContext = useGlobalContext()

  onMounted(() => {
    globalContext?.value.setScrollTop(0)
  })
}

export default useScrollToTop
