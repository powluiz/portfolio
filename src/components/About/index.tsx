import DotPattern from '@/assets/DotPattern'
import { useTranslation } from 'react-i18next'
import { ToolList } from '..'
import picture from '@/assets/me.jpg'

const textClassName =
  'text h-fit w-full text-justify text-base font-normal leading-tight text-neutral-dark sm:text-lg lg:text-xl'

const About = () => {
  const { t } = useTranslation('about')

  return (
    <div id="section-about" className="section-wrapper bg-neutral-white py-16">
      <div className="content-wrapper z-10 flex h-full w-full flex-col gap-6">
        <h1 className="z-10 h-fit w-full text-center text-[2.5rem] font-extrabold text-primary-dark md:text-4xl lg:text-5xl">
          {t('About me')}
        </h1>
        <div className="flex w-full flex-col items-center justify-center gap-6 md:flex-row">
          <div className="has-tooltip relative z-10 aspect-square w-[13rem] flex-shrink-0 rounded-full p-[0.5rem] outline outline-2 outline-primary-dark">
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[0.55rem] w-[0.55rem] animate-[circle_10s_linear_infinite] rounded-full bg-primary-dark" />
            <img
              src={picture}
              className="h-full w-full rounded-full object-cover"
              alt="That's me!"
            />
            <span className="tooltip top-[-2.5rem] w-fit text-nowrap rounded-full bg-neutral-black px-3 py-1 text-neutral-white shadow-lg">
              {t('img_hover')}
            </span>
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
