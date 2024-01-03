import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import IIconProps from './types'

const Icon: React.FC<IIconProps> = ({ ...rest }) => {
  return <FontAwesomeIcon {...rest} />
}

export default Icon
