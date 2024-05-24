import { useTranslation } from 'react-i18next'
import { Button, NavBar, ParticleBackground } from '..'
import { socialLinks } from '@/utils/constants'
import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'
import i18n from '@/translations/i18n'

const Home = () => {
  const { t } = useTranslation('home')

  const ctxWrapper = useRef(null)
  const tl = useRef<any>()
  const title_tl = useRef<any>()

  const roleList = ['UX', 'Designer', 'Editor', 'Front']
  const positionRef = useRef(roleList.length - 1)

  const [roleText, setRoleText] = useState(t(roleList[positionRef.current]))

  const handleChangeRole = () => {
    positionRef.current === roleList.length - 1
      ? (positionRef.current = 0)
      : positionRef.current++
    setRoleText(t(roleList[positionRef.current]))
  }

  i18n.on('languageChanged', () => {
    setRoleText(t(roleList[positionRef.current]))
  })

  useEffect(() => {
    tl.current = gsap.timeline({
      delay: 0.5,
    })

    title_tl.current = gsap.timeline({
      delay: 1.5,
      defaults: {
        duration: 1,
      },
      repeat: -1,
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

      title_tl.current
        .fromTo(
          '.anim-role',
          {
            opacity: 0,
            rotateX: 45,
            y: 100,
          },
          { y: 0, ease: 'elastic.out(0.7,0.8)', rotateX: 0, opacity: 1 },
        )
        .to(
          '.anim-role',
          {
            y: -100,
            rotateX: -45,
            opacity: 0,
            ease: 'elastic.in(0.7,0.8)',
          },
          '+=1',
        )
        .to('.anim-role', {
          y: 100,
          duration: 0,
          onComplete: () => handleChangeRole(),
        })
    }, ctxWrapper)

    return () => ctx.revert()
  }, [])

  return (
    <div
      id="section-home"
      ref={ctxWrapper}
      className="relative flex h-svh flex-col"
    >
      <NavBar showLangSelector />
      <div className="mt-[3rem] flex w-full flex-1 flex-col items-center justify-center gap-4 px-8 lg:mt-[4rem] lg:gap-6 lg:px-16">
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
          <h1 className="anim-title select-none  text-center text-3xl font-extrabold text-primary-low sm:text-5xl md:text-6xl lg:text-6xl">
            {t("Hi, I'm Luiz:")}
          </h1>
          <div className="relative flex h-[6.2rem] w-full items-center justify-center overflow-hidden sm:h-[11rem] md:h-[8rem]">
            <h1 className="anim-role w-full select-none text-wrap break-words text-center text-[40px] font-extrabold leading-[2.5rem] text-primary-dark sm:text-7xl md:text-nowrap lg:text-8xl">
              {roleText}
            </h1>
          </div>
          <span className="anim-phrase mt-3 inline w-fit max-w-[40rem] select-none text-center text-base font-normal sm:text-xl md:text-2xl">
            {t('catch_phrase')}
          </span>
        </div>
        <a className="anim-button" href="#section-contact">
          <Button
            className="with-border-anim mt-4 rounded-none px-8 py-4"
            // className="with-border-anim mt-4 rounded-none px-8 py-4"
            onClick={() => {}}
          >
            <h3 className="with-border-content text-lg">{t('Get in touch')}</h3>
          </Button>
        </a>
      </div>
      <ParticleBackground
        backgroundColor="transparent"
        particleSize="random"
        className="absolute left-0 top-0 z-[-8] h-full w-full opacity-20"
      />
      <div className="home-gradient absolute z-[-10] h-full w-full opacity-55" />
    </div>
  )
}

export default Home
