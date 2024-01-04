import DotPattern from '@/assets/DotPattern'
import { useTranslation } from 'react-i18next'
import { ToolList } from '..'

interface ITextBlockProps {
  title: string
  text: string
  component?: React.ReactNode
}

const TextBlock = ({ title, text, component }: ITextBlockProps) => (
  <div className="flex w-fit flex-col gap-4">
    <h2
      className={`text-start text-4xl font-extrabold text-primary-dark lg:text-5xl`}
    >
      {title}
    </h2>
    <p
      className={`text h-fit w-full text-start text-base font-normal leading-tight text-neutral-dark sm:text-lg lg:text-xl`}
    >
      {text}
    </p>
    {component}
  </div>
)

const About = () => {
  const { t } = useTranslation('about')

  return (
    <div id="section-about" className="section-wrapper bg-neutral-white">
      <div className="content-wrapper z-10 flex h-full w-full flex-col gap-10 lg:gap-16">
        <TextBlock title={t('About me')} text={t('AboutText')} />
        <TextBlock
          title={t('Tools and Technologies')}
          text={t('ToolsText')}
          component={<ToolList />}
        />
      </div>
      <DotPattern className="animate-wiggle-pos absolute bottom-[3rem] left-[4.5rem] z-[1] opacity-20 md:opacity-45" />
    </div>
  )
}

export default About
