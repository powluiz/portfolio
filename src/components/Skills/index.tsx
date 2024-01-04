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
      className={`h-fit w-full text-center text-base font-light leading-tight text-neutral-base md:text-${align} sm:text-lg lg:text-xl`}
    >
      {text}
    </p>
  </div>
)

const Skills = () => {
  const { t } = useTranslation('skills')

  return (
    <div id="section-skills" className="section-wrapper bg-primary-low">
      <div className="content-wrapper flex h-full min-h-fit w-full flex-col gap-10 lg:gap-16">
        <h1 className="z-10 h-fit w-full text-center text-[2.5rem] font-extrabold text-neutral-white sm:text-5xl md:text-6xl">
          {t('Skills')}
        </h1>

        <div className="z-10 grid min-h-fit grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-2 md:gap-y-16">
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
      <DotPattern className="animate-wiggle-pos absolute left-[4.5rem] top-[-6rem] z-[1] opacity-30 md:opacity-45" />
      <DotPattern className="animate-wiggle-pos absolute bottom-[-6rem] right-[2rem] z-[1] opacity-20 md:opacity-45" />
    </div>
  )
}

export default Skills
