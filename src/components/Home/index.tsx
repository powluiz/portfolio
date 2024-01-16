import { useTranslation } from 'react-i18next'
import { Button, NavBar } from '..'
import { socialLinks } from '@/utils/constants'
import DotPattern from '@/assets/DotPattern'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

const Home = () => {
  const { t } = useTranslation('home')

  const ctxWrapper = useRef(null)
  const tl = useRef<any>()

  useEffect(() => {
    tl.current = gsap.timeline({
      delay: 0.5,
    })

    let ctx = gsap.context(() => {
      tl.current
        .fromTo(
          '.anim-social-icon',
          { y: 32, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            ease: 'elastic.out(0.75,0.65)',
          },
        )
        .fromTo(
          '.anim-title',
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
          '.anim-phrase',
          { y: 32, opacity: 0 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
          '-=0.75',
        )
        .fromTo(
          '.anim-button',
          { scale: 0, opacity: 1 },
          { opacity: 1, scale: 1, duration: 1, ease: 'elastic.out(0.5,0.5)' },
          '-=0.25',
        )
    }, ctxWrapper)

    return () => ctx.revert()
  }, [])

  return (
    <div id="section-home" ref={ctxWrapper} className="section-wrapper">
      <NavBar showLangSelector />
      <div className="content-wrapper flex h-dvh min-h-fit w-full flex-col items-center justify-center gap-8 md:flex-row md:justify-between">
        <div className="mt-16 flex h-fit w-full flex-col items-center justify-center gap-4 lg:gap-6">
          <div className="flex w-fit items-center justify-center gap-3">
            {socialLinks?.map(link => (
              <a
                key={`link-${link?.url}`}
                href={link?.url}
                target="_blank"
                className="anim-social-icon hover:brightness-125"
              >
                {link?.icon}
              </a>
            ))}
          </div>
          <div className="flex min-w-fit flex-col items-center justify-center gap-1">
            <h1 className="anim-title select-none text-nowrap text-center text-4xl font-extrabold text-primary-low sm:text-5xl md:text-6xl lg:text-6xl">
              {t("Hi, I'm Luiz:")}
            </h1>
            <div className="flex">
              <h1 className="anim-title select-none text-wrap text-center text-5xl font-extrabold text-primary-dark sm:text-6xl md:text-7xl lg:text-8xl">
                {t('Frontend Developer')}
              </h1>
            </div>
            <span className="anim-phrase mt-3 inline w-fit max-w-[40rem] select-none text-center text-base font-normal sm:text-xl md:text-2xl">
              {t('catch_phrase')}
            </span>
          </div>
          <a className="anim-button" href="#section-contact">
            <Button
              className="with-border-anim mt-4 rounded-none px-8 py-4"
              onClick={() => {}}
            >
              <h3 className="with-border-content text-lg">
                {t('Get in touch')}
              </h3>
            </Button>
          </a>
        </div>
      </div>
      <DotPattern className="absolute right-[10%] top-[10%] z-0 animate-wiggle-pos opacity-30" />
      <div className="home-gradient absolute z-[-10] h-full w-full opacity-55" />
    </div>
  )
}

export default Home
