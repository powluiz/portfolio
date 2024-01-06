import DotPattern from '@/assets/DotPattern'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation('contact')

  return (
    <div id="section-contact" className="section-wrapper bg-neutral-white">
      <div className="content-wrapper flex h-full min-h-fit w-full flex-col gap-10 lg:gap-16">
        <div className="z-10 mx-auto flex w-fit max-w-[30rem] flex-col gap-3 lg:max-w-[38rem] lg:gap-4">
          <h1 className="text-center text-4xl font-extrabold text-primary-dark md:text-5xl">
            {t('Contact')}
          </h1>
          <h2 className="text-center text-lg font-light text-primary-low md:text-2xl">
            {t('ContactText')}
          </h2>
        </div>
      </div>
      <DotPattern
        color="white"
        className="absolute right-[2rem] top-[3rem] z-[1] animate-wiggle-pos opacity-30"
      />
      <DotPattern
        color="white"
        className="absolute bottom-[1.5rem] left-[4.5rem] z-[1] animate-wiggle-pos opacity-30"
      />
    </div>
  )
}

export default Contact
