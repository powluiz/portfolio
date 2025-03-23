import DotPattern from '@/assets/DotPattern'
import { useTranslation } from 'react-i18next'
import { ToolList } from '..'
import picture from '@/assets/me.jpg'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

const textClassName =
  'anim-text text h-fit w-full text-justify text-base font-normal leading-tight text-neutral-dark sm:text-lg lg:text-xl'

const About = () => {
  const { t } = useTranslation('about')

  const ctxWrapper = useRef(null)
  const tl = useRef<any>()

  useEffect(() => {
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: ctxWrapper.current,
        start: '25% 85%',
        // markers: true,
      },
    })

    const ctx = gsap.context(() => {
      tl.current
        .fromTo(
          '.anim-title',
          { y: 32, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'elastic.out(0.75,0.65)',
          },
        )
        .fromTo(
          '.anim-text',
          { y: 32, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: 'power3.out',
            duration: 1,
            stagger: 0.1,
          },
          '-=0.45',
        )
        .fromTo(
          '.anim-profile-pic',
          { y: 32, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'elastic.out(0.75,0.65)',
          },
          '-=0.85',
        )
        .fromTo(
          '.anim-tool-badge',
          { y: 32, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.05,
            ease: 'elastic.out(0.75,0.65)',
          },
          '-=0.45',
        )
    }, ctxWrapper)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={ctxWrapper}
      id="section-about"
      className="section-wrapper bg-neutral-white py-16"
    >
      <div className="content-wrapper z-10 flex h-full w-full flex-col gap-8">
        <div className="flex w-full flex-col items-center justify-center gap-6 md:flex-row">
          <div className="anim-profile-pic has-tooltip relative z-10 aspect-square w-[13rem] flex-shrink-0 rounded-full p-[0.5rem] outline outline-2 outline-primary-dark">
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[0.55rem] w-[0.55rem] animate-[circle_10s_linear_infinite] rounded-full bg-primary-dark" />
            <img
              src={picture}
              className="h-full w-full rounded-full object-cover"
              alt="That's me!"
            />
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="anim-title z-10 h-fit w-full text-[2.5rem] font-extrabold text-primary-dark md:text-4xl lg:text-5xl">
              {t('About me')}
            </h2>
            <p className={textClassName}>{t('AboutText')}</p>
          </div>
        </div>

        <ToolList />
      </div>
      <DotPattern className="absolute bottom-[3rem] left-[4.5rem] z-[1] animate-wiggle-pos opacity-20 md:opacity-45" />
    </div>
  )
}

export default About
