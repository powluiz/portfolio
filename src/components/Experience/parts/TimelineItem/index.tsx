import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ITimelineItemProps } from './types'
gsap.registerPlugin(ScrollTrigger)

const TimelineItem = ({
  company,
  role,
  period,
  description,
  skills,
}: ITimelineItemProps) => {
  const tl = useRef<any>()

  const ctxWrapper = useRef<any>(null)

  useEffect(() => {
    tl.current = gsap.timeline({
      defaults: {
        duration: 0.7,
        ease: 'power2.out',
        y: 40,
      },
      scrollTrigger: {
        trigger: ctxWrapper.current,
        start: 'top 85%',
        end: '75% 15%',
        scrub: 1.5,
        // markers: true,
      },
    })

    let ctx = gsap.context(() => {
      tl.current
        .fromTo('.anim-company', { opacity: 0 }, { opacity: 1, y: 0 })
        .fromTo('.anim-name', { opacity: 0 }, { opacity: 1, y: 0 }, '-=0.45')
        .fromTo(
          '.anim-description',
          { opacity: 0 },
          { opacity: 1, y: 0 },
          '-=0.45',
        )
        .fromTo(
          '.anim-skill-chip',
          { y: 24, opacity: 0 },
          { opacity: 1, y: 0, stagger: 0.1, ease: 'power3.out' },
        )
        .fromTo('.anim-period', { opacity: 0 }, { opacity: 1, y: 0 }, 1)
    }, ctxWrapper)
    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={ctxWrapper}
      className="mx-auto flex max-w-[50rem] items-start gap-[5rem] text-nowrap"
    >
      <h1 className="anim-period min-w-[9.375rem] text-right font-normal text-neutral-base">
        {period}
      </h1>
      <div className="flex flex-col gap-1">
        <div className="flex flex-col gap-0">
          <h1 className="anim-company text-[1.375rem] font-semibold text-white">
            {company}
          </h1>
          <h1 className=" anim-name text-[1.25rem] font-medium text-slate-600">
            {role}
          </h1>
        </div>
        <h1 className="anim-description mt-2 text-wrap text-justify text-lg font-normal text-neutral-base">
          {description}
        </h1>
        <div className="flex flex-wrap gap-3 pt-4">
          {skills?.map((skill, index) => (
            <div
              key={`job-skill-${index}`}
              className="anim-skill-chip select-none rounded-full bg-[#111E41] px-4 py-2 opacity-0 transition-colors duration-200 ease-in-out hover:bg-[#1F2A5F]"
            >
              <h3 className="text-sm font-semibold text-primary-base">
                {skill}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TimelineItem
