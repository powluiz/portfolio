import { useTranslation } from 'react-i18next'
import { Button, NavBar } from '..'
import { socialLinks } from '@/utils/constants'
import DotPattern from '@/assets/DotPattern'
import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react'
import HeroIllustration from '@/assets/HeroIllustration'

const Home = () => {
  const { t } = useTranslation('home')

  const ctxWrapper = useRef(null)
  const tl = gsap.timeline({
    defaults: {
      y: 32,
      opacity: 0,
    },
    delay: 0.5,
  })

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.from('.social-icon', {
        duration: 1,
        stagger: 0.1,
        ease: 'elastic.out(0.75,0.65)',
      })
    }, ctxWrapper)

    return () => ctx.revert()
  }, [])

  return (
    <div id="section-home" ref={ctxWrapper} className="section-wrapper">
      <NavBar showLangSelector />
      <div className="content-wrapper flex h-dvh min-h-fit w-full flex-col items-center justify-center gap-8 md:flex-row md:justify-between">
        {/* left part */}
        <div className="mt-12 flex h-fit w-full flex-col items-start justify-center gap-4 md:mt-0 lg:gap-6">
          <div className="flex w-fit items-center justify-center gap-3">
            {socialLinks?.map(link => (
              <a
                key={`link-${link?.url}`}
                href={link?.url}
                target="_blank"
                className="social-icon hover:-translate-y-1 hover:brightness-[0.83]"
              >
                {link?.icon}
              </a>
            ))}
          </div>
          <div className="flex min-w-fit flex-col gap-1">
            <h1 className="text-nowrap text-3xl font-extrabold text-primary-low md:text-5xl lg:text-6xl">
              {t("Hi, I'm Luiz:")}
            </h1>
            <div className="flex">
              <h1 className="text-wrap text-3xl font-extrabold text-primary-dark md:text-nowrap md:text-5xl lg:text-6xl">
                {t('Frontend Developer')}
              </h1>
            </div>
            <span className="w-fit">
              <span className="inline text-base font-normal md:text-lg lg:text-xl">
                {t('My job is to turn')}
              </span>
              <span className="inline text-base font-semibold md:text-lg lg:text-xl">
                {t('ideas')}
              </span>
              <span className="inline text-base font-normal md:text-lg lg:text-xl">
                {t('into')}
              </span>
              <span className="inline text-base font-semibold md:text-lg lg:text-xl">
                {t('meaningful experiences')}
              </span>
            </span>
          </div>
          <div className="flex gap-6">
            <a href="#section-contact">
              <Button className="rounded-full px-8" onClick={() => {}}>
                <h3 className="text-base">{t('Get in touch')}</h3>
              </Button>
            </a>
          </div>
        </div>

        {/* right part */}
        <div className="relative hidden h-fit w-full items-center justify-center lg:flex">
          <div className="z-10 mx-auto w-[80%] max-w-[25rem] md:w-60 lg:flex lg:w-full">
            <HeroIllustration />
          </div>
        </div>
      </div>
      <DotPattern className="absolute right-[10%] top-[10%] z-0 animate-wiggle-pos opacity-30" />
      <div className="home-gradient absolute z-[-10] h-full w-full opacity-85" />
    </div>
  )
}

export default Home
