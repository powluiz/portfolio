import { toolList } from '@/utils/constants'
import { Badge } from '..'

const ToolList = () => {
  return (
    <div className="z-10 flex h-fit flex-wrap justify-center gap-x-3 gap-y-3 py-3 transition-all duration-100 ease-in-out">
      {toolList?.map((tool, index) => (
        <Badge
          key={`tool-${index}-${tool?.name}`}
          name={tool?.name}
          icon={tool?.icon}
          textColor={tool?.textColor}
          badgeColor={tool?.badgeColor}
        />
      ))}
    </div>
  )
}

export default ToolList
