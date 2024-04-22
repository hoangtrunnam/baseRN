import React from 'react'
import Svg, {Path, Circle} from 'react-native-svg'

interface AcceptCallProps {
  width?: number
  height?: number
  color?: string
}

const AcceptCall = ({width = 60, height = 60, color = '#fff'}: AcceptCallProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 60 60" fill="none">
      <Circle cx="30" cy="30" r="30" fill="#5ACD30" />
      <Path
        d="M25.606 20.4171L26.1086 24.4689C26.1789 25.0357 25.9856 25.6034 25.5848 26.0073L24.2215 27.3811C23.6876 27.919 23.6451 28.7769 24.1232 29.3657L25.4039 30.943C26.1885 31.9093 27.1116 32.7526 28.1426 33.4452L29.9577 34.6646C30.5565 35.0668 31.3562 34.973 31.8471 34.4429L33.154 33.0319C33.4115 32.754 33.7921 32.6281 34.1629 32.6982L38.5463 33.5263C39.0676 33.6248 39.4453 34.0834 39.4453 34.6178V38.3736C39.4453 38.967 38.9861 39.4587 38.3974 39.444C31.6887 39.2764 20.0262 34.7937 19.4462 20.5606C19.4212 19.9477 19.9172 19.4443 20.5259 19.4443H24.5124C25.0682 19.4443 25.5371 19.8614 25.606 20.4171Z"
        fill={color}
      />
    </Svg>
  )
}

export default AcceptCall
