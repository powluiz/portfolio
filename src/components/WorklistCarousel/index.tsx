import { IJobItem } from '@/utils/constants'
import CarouselCard from './parts/CarouselCard'

export interface IWorklistCarouselProps {
  items: IJobItem[]
}

const WorklistCarousel = ({ items }: IWorklistCarouselProps) => {
  return (
    <div className="flex h-fit w-full gap-4">
      {items?.map((item, index) => (
        <CarouselCard key={`carousel-card-${index}`} {...item} />
      ))}
    </div>
  )
}

export default WorklistCarousel
