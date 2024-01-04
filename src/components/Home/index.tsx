import { useTranslation } from 'react-i18next'
import { Button, NavBar } from '..'
import { socialLinks } from '@/utils/constants'
import picture from '@/assets/me.jpg'
import DotPattern from '@/assets/DotPattern'

const Home = () => {
  const { t } = useTranslation('home')

  return (
    <div id="section-home" className="flex h-screen flex-col">
      <NavBar showLangSelector />
      <div className="content-wrapper flex h-full w-full flex-col-reverse gap-8 lg:flex-row lg:justify-between">
        {/* left part */}
        <div className="flex h-full w-full flex-col items-start justify-center gap-4 py-8 lg:gap-6">
          <div className="flex w-fit items-center justify-center gap-3">
            {socialLinks?.map(link => (
              <a
                key={`link-${link?.url}`}
                href={link?.url}
                target="_blank"
                className="hover:animate-wiggle transition duration-150 ease-in-out hover:brightness-[0.83]"
              >
                {link?.icon}
              </a>
            ))}
          </div>
          <div className="flex min-w-fit flex-col gap-1 ">
            <h1 className="text-nowrap text-4xl font-extrabold text-primary-low md:text-6xl">
              {t("Hi, I'm Luiz:")}
            </h1>
            <div className="flex">
              <h1 className="text-nowrap text-4xl font-extrabold text-primary-dark md:text-6xl">
                {t('Frontend Developer')}
              </h1>
            </div>
            <span className="w-fit">
              <span className="inline text-base font-normal lg:text-xl">
                {t('My job is to turn')}
              </span>
              <span className="inline text-base font-semibold lg:text-xl">
                {t('ideas')}
              </span>
              <span className="inline text-base font-normal lg:text-xl">
                {t('into')}
              </span>
              <span className="inline text-base font-semibold lg:text-xl">
                {t('meaningful experiences')}
              </span>
            </span>
          </div>
          <div className="flex gap-6">
            <Button onClick={() => {}} variant="secondary">
              {t('About me')}
            </Button>
            <Button onClick={() => {}}>{t('Get in touch')}</Button>
          </div>
        </div>

        {/* right part */}
        <div className="relative hidden h-full w-full items-center justify-center lg:flex">
          <DotPattern className="animate-wiggle-pos absolute right-[3rem] top-[6rem] z-[1] opacity-30 md:opacity-45" />
          <DotPattern className="animate-wiggle-pos absolute bottom-[5rem] left-[3rem] z-[1] opacity-30 md:opacity-45" />
          <div className="z-10 aspect-square w-40 flex-shrink-0 overflow-hidden rounded-full bg-neutral-dark drop-shadow-md hover:brightness-105 lg:w-72">
            <img
              src={picture}
              className="h-full w-full object-cover"
              alt="That's me!"
            />
          </div>
        </div>
      </div>
      {/* <div className="absolute z-[-9] h-full w-full bg-noise opacity-50" /> */}
      {/* <div className="home-gradient absolute z-[-10] h-full w-full" /> */}
    </div>
  )
}

export default Home
