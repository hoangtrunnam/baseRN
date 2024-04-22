import React from 'react'
import Svg, {Defs, LinearGradient, Path, Stop} from 'react-native-svg'

type AssetProps = {
  width: number
  height: number
  color?: string
  isSelected?: boolean
}

const Asset = ({width, height, isSelected = false}: AssetProps) => {
  if (isSelected) {
    return (
      <Svg width={width} height={height} viewBox="0 0 25 24" fill="none">
        <Path d="M16.5 12H18.5V16H16.5V12Z" fill="url(#paint0_linear_6007_44524)" />
        <Path
          d="M20.5 7V5C20.5 3.897 19.603 3 18.5 3H5.5C3.846 3 2.5 4.346 2.5 6V18C2.5 20.201 4.294 21 5.5 21H20.5C21.603 21 22.5 20.103 22.5 19V9C22.5 7.897 21.603 7 20.5 7ZM5.5 5H18.5V7H5.5C5.24252 6.98848 4.99941 6.87809 4.82128 6.69182C4.64315 6.50554 4.54373 6.25774 4.54373 6C4.54373 5.74226 4.64315 5.49446 4.82128 5.30818C4.99941 5.12191 5.24252 5.01152 5.5 5V5ZM20.5 19H5.512C5.05 18.988 4.5 18.805 4.5 18V8.815C4.814 8.928 5.147 9 5.5 9H20.5V19Z"
          fill="url(#paint1_linear_6007_44524)"
        />
        <Defs>
          <LinearGradient
            id="paint0_linear_6007_44524"
            x1="16.5"
            y1="14"
            x2="18.5"
            y2="14"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor="#B511EE" />
            <Stop offset="1" stopColor="#4C47DF" />
          </LinearGradient>
          <LinearGradient
            id="paint1_linear_6007_44524"
            x1="2.5"
            y1="12"
            x2="22.5"
            y2="12"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor="#B511EE" />
            <Stop offset="1" stopColor="#4C47DF" />
          </LinearGradient>
        </Defs>
      </Svg>
    )
  }
  return (
    <Svg width={width} height={height} viewBox="0 0 25 24" fill="none">
      <Path d="M16.5 12H18.5V16H16.5V12Z" fill="#B7BBC7" />
      <Path
        d="M20.5 7V5C20.5 3.897 19.603 3 18.5 3H5.5C3.846 3 2.5 4.346 2.5 6V18C2.5 20.201 4.294 21 5.5 21H20.5C21.603 21 22.5 20.103 22.5 19V9C22.5 7.897 21.603 7 20.5 7ZM5.5 5H18.5V7H5.5C5.24252 6.98848 4.99941 6.87809 4.82128 6.69182C4.64315 6.50554 4.54373 6.25774 4.54373 6C4.54373 5.74226 4.64315 5.49446 4.82128 5.30818C4.99941 5.12191 5.24252 5.01152 5.5 5V5ZM20.5 19H5.512C5.05 18.988 4.5 18.805 4.5 18V8.815C4.814 8.928 5.147 9 5.5 9H20.5V19Z"
        fill="#B7BBC7"
      />
    </Svg>
  )
}

export default Asset
