import { createEffect, createSignal, onMount } from "solid-js"

interface Stat {
  value: number
  label: string
}

interface StatsCounterProps {
  stats: Stat[]
}

export default function StatsCounter(props: StatsCounterProps) {
  let containerRef: HTMLDivElement | undefined
  const [visible, setVisible] = createSignal(false)
  const [animated, setAnimated] = createSignal(false)

  function checkVisibility(): void {
    if (!containerRef) return
    const rect = containerRef.getBoundingClientRect()
    const inView = rect.top < window.innerHeight && rect.bottom > 0
    setVisible(inView)
    if (inView && !animated()) {
      setAnimated(true)
      animateCounters()
    }
  }

  function animateCounters(): void {
    if (!containerRef) return
    const elements = containerRef.querySelectorAll<HTMLSpanElement>("[data-target]")
    elements.forEach((el) => {
      const target = parseInt(el.dataset.target ?? "0", 10)
      const duration = 2000
      const startTime = performance.now()

      function update(currentTime: number): void {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        const current = Math.round(eased * target)
        el.textContent = String(current)
        if (progress < 1) {
          requestAnimationFrame(update)
        }
      }

      requestAnimationFrame(update)
    })
  }

  function handleScroll(): void {
    checkVisibility()
  }

  onMount(() => {
    checkVisibility()
    window.addEventListener("scroll", handleScroll, { passive: true })
  })

  createEffect(() => {
    if (visible()) {
      checkVisibility()
    }
  })

  return (
    <div
      ref={containerRef}
      class="grid grid-cols-3 gap-4 max-w-md mx-auto mt-12 mb-4"
    >
      {props.stats.map((stat) => (
        <div class="text-center">
          <div class="text-3xl md:text-4xl font-bold text-black dark:text-white" data-target={stat.value}>
            0
          </div>
          <div class="text-sm mt-1 opacity-75 dark:text-white/75">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}