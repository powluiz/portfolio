import DotPattern from '@/assets/DotPattern'
import { experienceList } from '@/utils/constants'
import { useTranslation } from 'react-i18next'
import TimelineItem from './parts/TimelineItem'
import i18n from '@/translations/i18n'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Experience = () => {
  const { t } = useTranslation('experience')
  const activeLanguage = i18n.language

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
        start: 'top 65%',
        end: '75% 5%',
        // markers: true,
      },
    })

    let ctx = gsap.context(() => {
      tl.current.fromTo(
        '.anim-title',
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'elastic.out(0.75,0.65)',
          stagger: 0.1,
        },
      )
    }, ctxWrapper)
    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={ctxWrapper}
      id="section-experience"
      className="section-wrapper bg-primary-low"
    >
      <div className="content-wrapper flex h-full min-h-fit w-full flex-col gap-10 lg:gap-16">
        <div className="z-10 flex flex-col gap-4">
          <h1 className="anim-title text-center text-[2.5rem] font-extrabold text-neutral-white sm:text-4xl md:text-5xl">
            {t('Experience')}
          </h1>
          <h2 className="anim-title text-center text-xl font-light text-neutral-white md:text-2xl">
            {t('ExperienceText')}
          </h2>
          <div className="relative mt-9 flex flex-col gap-16 pb-14">
            {experienceList?.map((experience, index) => (
              <TimelineItem
                key={`experience-item-${index}`}
                company={experience?.company[activeLanguage]}
                role={experience?.role[activeLanguage]}
                period={experience?.period[activeLanguage]}
                description={experience?.description[activeLanguage]}
                skills={experience?.skills}
              />
            ))}
          </div>
        </div>
      </div>
      <DotPattern className="absolute right-[0rem] top-[3rem] z-[1] animate-wiggle-pos opacity-30" />
      <DotPattern className="absolute bottom-[1.5rem] left-[2rem] z-[1] animate-wiggle-pos opacity-30" />
    </div>
  )
}

export default Experience
