import DotPattern from '@/assets/DotPattern'
import { useTranslation } from 'react-i18next'
import { ToolList } from '..'
import picture from '@/assets/me.jpg'

const textClassName =
  'text h-fit w-full text-justify text-base font-normal leading-tight text-neutral-dark sm:text-lg lg:text-xl'

const About = () => {
  const { t } = useTranslation('about')

  return (
    <div id="section-about" className="section-wrapper bg-neutral-white">
      <div className="content-wrapper z-10 flex h-full w-full flex-col gap-6">
        <h1 className="z-10 h-fit w-full text-center text-[2.5rem] font-extrabold text-primary-dark md:text-4xl lg:text-5xl">
          {t('About me')}
        </h1>
        <div className="flex w-full flex-col items-center justify-center gap-6 md:flex-row">
          <div className="z-10 aspect-square w-44 flex-shrink-0 overflow-hidden rounded-full p-1 outline outline-2 outline-primary-dark">
            <img
              src={picture}
              className="h-full w-full rounded-full object-cover"
              alt="That's me!"
            />
          </div>
          <p className={textClassName}>{t('AboutText')}</p>
        </div>

        <p className={textClassName}>{t('ToolsText')}</p>
        <ToolList />
      </div>
      <DotPattern className="absolute bottom-[3rem] left-[4.5rem] z-[1] animate-wiggle-pos opacity-20 md:opacity-45" />
    </div>
  )
}

export default About
