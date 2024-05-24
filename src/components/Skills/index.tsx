/* eslint-disable @typescript-eslint/no-explicit-any */
import DotPattern from '@/assets/DotPattern'
import useBreakpoint from '@/utils/hooks/useBreakpoint'
import { useTranslation } from 'react-i18next'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

interface ITextBlockProps {
  title: string
  text: string
  align: 'start' | 'end'
}

const TextBlock = ({ title, text, align }: ITextBlockProps) => {
  const isLargerThanMd = useBreakpoint('md')

  return (
    <div className="flex w-fit flex-col gap-4">
      <h2
        className={`anim-subtitle text-center text-3xl font-semibold text-primary-base lg:text-4xl`}
        style={{
          textAlign: isLargerThanMd ? align : 'center',
        }}
      >
        {title}
      </h2>
      <p
        className={`anim-text h-fit w-full hyphens-auto text-justify text-base font-light leading-tight text-neutral-base lg:text-lg`}
        style={{
          textAlignLast: isLargerThanMd ? align : 'center',
        }}
      >
        {text}
      </p>
    </div>
  )
}

const Skills = () => {
  const { t } = useTranslation('skills')

  const ctxWrapper = useRef(null)
  const tl = useRef<any>()

  useEffect(() => {
    tl.current = gsap.timeline({
      defaults: {
        y: 32,
        opacity: 0,
      },
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
          { opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: 'power3.out',
            duration: 1,
          },
        )
        .fromTo(
          '.anim-subtitle',
          { opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.1 },
          '-=0.75',
        )
        .fromTo(
          '.anim-text',
          { opacity: 0 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.1 },
          '-=0.75',
        )
    }, ctxWrapper)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={ctxWrapper}
      id="section-skills"
      className="section-wrapper bg-primary-low py-16"
    >
      <div className="content-wrapper flex h-full min-h-fit w-full max-w-[80rem] flex-col gap-10 lg:gap-16">
        <h1 className="anim-title z-10 h-fit w-full text-center text-[2.5rem] font-extrabold text-neutral-white md:text-4xl lg:text-5xl">
          {t('Skills')}
        </h1>

        <div className="z-10 grid min-h-fit grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-2 md:gap-y-10">
          <TextBlock
            title={t('Development')}
            text={t('DevelopText')}
            align="end"
          />
          <TextBlock title={t('Design')} text={t('DesignText')} align="start" />
          <TextBlock
            title={t('UX/UI Design')}
            text={t('UXDesignText')}
            align="end"
          />
          <TextBlock
            title={t('Video Editing')}
            text={t('VideoEditText')}
            align="start"
          />
        </div>
      </div>
      <DotPattern className="absolute left-[-2rem] top-[4rem] z-[1] animate-wiggle-pos opacity-30 md:opacity-45" />
      <DotPattern className="absolute bottom-[-6rem] right-[2rem] z-[1] animate-wiggle-pos opacity-20 md:opacity-45" />
    </div>
  )
}

export default Skills
