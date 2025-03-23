import Button from '@/components/Button'
import i18n from '@/translations/i18n'
import { IJobItem } from '@/utils/constants'
import { useTranslation } from 'react-i18next'

export interface ICarouselCardProps extends IJobItem {}

const CarouselCard = ({
  name,
  link,
  imgSrc,
  description,
}: ICarouselCardProps) => {
  const activeLanguage = i18n.language
  const { t } = useTranslation('projects')

  const handleLinkRedirection = () => {
    window.open(link, '_blank')
  }

  return (
    <div className="flex w-full max-w-[20rem] flex-col rounded-xl bg-white">
      <img src={imgSrc} />
      <div className="flex flex-col p-4">
        <h1 className="text-[1.5rem] font-medium text-primary-low">
          {name[activeLanguage]}
        </h1>

        <h2 className="text-[1rem] font-normal text-neutral-dark">
          {description[activeLanguage]}
        </h2>
        <Button
          className="rounded-sm"
          disabled={!link}
          onClick={handleLinkRedirection}
        >
          <h3 className="with-border-content text-lg">{t('SeeProject')}</h3>
        </Button>
      </div>
    </div>
  )
}

export default CarouselCard
