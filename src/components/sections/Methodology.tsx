import { useCallback, useEffect, useRef, useState } from 'react'
import { METHODOLOGY_STAGES } from '../../data/methodology'
import { LabelMono } from '../ui/LabelMono'

const GRID_MARKS = [
  { x1: 82, y1: 308, stroke: '#e23b42' },
  { x1: 88, y1: 302, stroke: '#6ea8dc' },
  { x1: 1094, y1: 572, stroke: '#3b4145' },
  { x1: 786, y1: 572, stroke: '#e23b42' },
  { x1: 434, y1: 440, stroke: '#6ea8dc' },
  { x1: 610, y1: 484, stroke: '#3b4145' },
  { x1: 1182, y1: 88, stroke: '#e23b42' },
]

function getScrollTrigger() {
  const header = document.querySelector('.site-header')
  const headerHeight = header?.getBoundingClientRect().height ?? 72
  return headerHeight + 48
}

export function Methodology() {
  const [activeStage, setActiveStage] = useState(0)
  const stageRefs = useRef<(HTMLLIElement | null)[]>([])
  const rafRef = useRef<number | null>(null)
  const stage = METHODOLOGY_STAGES[activeStage]

  const updateActiveStage = useCallback(() => {
    const trigger = getScrollTrigger()
    let next = 0

    stageRefs.current.forEach((node, index) => {
      if (!node) return
      if (node.getBoundingClientRect().top <= trigger) {
        next = index
      }
    })

    setActiveStage((current) => (current === next ? current : next))
  }, [])

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current !== null) return
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null
        updateActiveStage()
      })
    }

    updateActiveStage()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current)
      }
    }
  }, [updateActiveStage])

  const scrollToStage = (index: number) => {
    const node = stageRefs.current[index]
    if (!node) return
    node.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative border-y border-[var(--line-soft)] bg-[var(--surface-1)] py-[var(--section-default)]">
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full select-none"
        style={{
          opacity: 1,
          maskImage: 'radial-gradient(130% 115% at 50% 42%, black 40%, transparent 92%)',
        }}
      >
        <defs>
          <pattern id="methodology-grid" width="44" height="44" patternUnits="userSpaceOnUse">
            <path
              d="M 44 0 L 0 0 0 44"
              fill="none"
              stroke="var(--decor-grid-line)"
              strokeWidth="1"
            />
          </pattern>
          <radialGradient id="methodology-bloom" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(110,168,220,0.09)" />
            <stop offset="100%" stopColor="rgba(110,168,220,0)" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#methodology-grid)" />
        <ellipse cx="82%" cy="140" rx="560" ry="330" fill="url(#methodology-bloom)" />
        {GRID_MARKS.map((mark, index) => (
          <g key={index} stroke={mark.stroke} strokeWidth="1.25" opacity="0.75">
            <line x1={mark.x1} y1={mark.y1} x2={mark.x1 + 12} y2={mark.y1} />
            <line x1={mark.x1 + 6} y1={mark.y1 - 6} x2={mark.x1 + 6} y2={mark.y1 + 6} />
          </g>
        ))}
      </svg>

      <div className="ac-container relative">
        <div className="max-w-[44rem]">
          <LabelMono>Methodology</LabelMono>
          <h2 className="mt-4 text-[length:var(--fs-h2)] font-semibold tracking-[var(--tr-h2)] text-[var(--ink-1)]">
            Cyber Security Auditing Services
          </h2>
          <p className="measure mt-4 text-[var(--ink-2)]">
            Analyze your organization&apos;s security posture.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-12">
          <div className="hidden md:col-span-5 md:block">
            <div className="sticky top-[calc(var(--header-h)+var(--header-utility-h)+3rem)]">
              <div className="relative rounded-[var(--r-sm)] border border-[var(--line)] bg-[var(--surface-2)] p-8">
                <p className="label-mono text-[var(--ink-3)]">
                  Stage {stage.number} / {String(METHODOLOGY_STAGES.length).padStart(2, '0')}
                </p>
                <p
                  aria-hidden
                  key={stage.number}
                  className="methodology-stage-number mt-4 font-[family-name:var(--font-jetbrains)] text-[clamp(4rem,8vw,7rem)] leading-none font-medium text-[var(--ink-1)]"
                >
                  {stage.number}
                </p>
                <p
                  key={stage.title}
                  className="methodology-stage-title mt-4 min-h-[2lh] text-[length:var(--fs-h3)] font-semibold text-[var(--ink-1)]"
                >
                  {stage.title}
                </p>
                <div className="mt-8 flex gap-1.5" role="presentation">
                  {METHODOLOGY_STAGES.map((_, index) => (
                    <span
                      key={index}
                      className={`h-0.5 flex-1 origin-left rounded-full transition-[background-color,transform] duration-[var(--dur-3)] ${
                        index === activeStage
                          ? 'scale-y-[2] bg-[var(--accent)]'
                          : 'bg-[var(--line-strong)]'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <ol className="space-y-6 md:col-span-6 md:col-start-7">
            {METHODOLOGY_STAGES.map((item, index) => {
              const isActive = index === activeStage
              return (
                <li
                  key={item.number}
                  ref={(node) => {
                    stageRefs.current[index] = node
                  }}
                  style={{ scrollMarginTop: 'calc(var(--header-h) + var(--header-utility-h) + 3rem)' }}
                  className={`overflow-hidden rounded-[var(--r-sm)] border transition-[border-color,opacity,transform] duration-[var(--dur-3)] ${
                    isActive
                      ? 'border-[var(--accent-line)] bg-[var(--surface-2)] opacity-100'
                      : 'border-[var(--line)] bg-[var(--surface-1)] md:scale-[0.99]'
                  }`}
                >
                  <button
                    type="button"
                    aria-current={isActive ? 'step' : undefined}
                    onClick={() => scrollToStage(index)}
                    className="w-full cursor-pointer p-6 text-left transition-colors duration-[var(--dur-2)] hover:bg-[color-mix(in_srgb,var(--accent)_5%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-line)] focus-visible:ring-inset md:p-8"
                  >
                    <p className="label-mono text-[var(--accent-hi)]">{item.number}</p>
                    <h3 className="mt-3 text-[length:calc(var(--fs-h3)*1.1)] font-semibold text-[var(--ink-1)]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[length:var(--fs-sm)] leading-[var(--lh-body)] text-[var(--ink-2)]">
                      {item.description}
                    </p>
                  </button>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
