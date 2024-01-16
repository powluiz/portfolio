import { toolList } from '@/utils/constants'
import { Badge } from '..'

const ToolList = () => {
  return (
    <div className="z-10 flex h-fit flex-wrap justify-center gap-x-3 gap-y-3 py-3 ">
      {toolList?.map((tool, index) => (
        <Badge
          className="anim-tool-badge"
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
