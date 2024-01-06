import DotPattern from '@/assets/DotPattern'
import { useTranslation } from 'react-i18next'

const Projects = () => {
  const { t } = useTranslation('projects')

  return (
    <div id="section-projects" className="section-wrapper bg-primary-dark">
      <div className="content-wrapper flex h-full min-h-fit w-full flex-col gap-10 lg:gap-16">
        <div className="z-10 flex flex-col gap-4">
          <h1 className="text-center text-[2.5rem] font-extrabold text-neutral-white sm:text-5xl md:text-6xl">
            {t('Projects')}
          </h1>
          <h2 className="text-center text-xl font-light text-neutral-white md:text-2xl">
            {t('ProjectsText')}
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

export default Projects
