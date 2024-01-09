import { useCallback, useState } from 'react'

import { throttle } from 'lodash'

export interface IThrottledState {
  initialValue: any
  delay?: number
}

const useThrottle = ({ initialValue, delay = 300 }: IThrottledState) => {
  const [value, setValue] = useState(initialValue)
  const debouncedSetValue = useCallback(
    throttle(nextValue => setValue(nextValue), delay),
    [delay],
  )

  console.log(initialValue)

  return [value, debouncedSetValue]
}

export default useThrottle
