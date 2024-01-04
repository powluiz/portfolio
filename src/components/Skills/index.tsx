import DotPattern from '@/assets/DotPattern'
import { useTranslation } from 'react-i18next'

interface ITextBlockProps {
  title: string
  text: string
  align: 'start' | 'end'
}

const TextBlock = ({ title, text, align = 'start' }: ITextBlockProps) => (
  <div className="flex w-fit flex-col gap-4">
    <h2
      className={`text-center text-2xl font-semibold text-neutral-white md:text-${align} sm:text-4xl`}
    >
      {title}
    </h2>
    <p
      className={`text h-fit w-full text-center text-base font-light leading-tight text-neutral-base md:text-${align} sm:text-lg lg:text-xl`}
    >
      {text}
    </p>
  </div>
)

const Skills = () => {
  const { t } = useTranslation('skills')

  return (
    <div
      id="section-skills"
      className="relative flex h-screen flex-col bg-primary-low"
    >
      <div className="content-wrapper flex h-full w-full flex-col gap-10 lg:gap-16">
        <h1 className="z-10 h-fit w-full text-center text-[2.5rem] font-extrabold text-neutral-white sm:text-5xl md:text-6xl">
          {t('Skills')}
        </h1>

        <div className="z-10 grid grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-2 md:gap-y-16">
          <TextBlock
            title={t('Development')}
            text={t('DevelopText')}
            align={'end'}
          />
          <TextBlock
            title={t('Design')}
            text={t('DesignText')}
            align={'start'}
          />
          <TextBlock
            title={t('UX/UI Design')}
            text={t('UXDesignText')}
            align={'end'}
          />
          <TextBlock
            title={t('Video Editing')}
            text={t('VideoEditText')}
            align={'start'}
          />
        </div>
      </div>
      <DotPattern className="absolute z-0 -translate-y-24 translate-x-24 opacity-40" />
      <DotPattern className="absolute bottom-[3.5rem] right-[-1rem] z-0 opacity-40" />
    </div>
  )
}

export default Skills
