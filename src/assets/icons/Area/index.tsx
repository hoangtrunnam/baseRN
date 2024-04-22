import React from 'react'
import Svg, {Path} from 'react-native-svg'

interface AreaProps {
  width?: number
  height?: number
  color?: string
}

const Area = ({width = 16, height = 16, color = '#9FA4B5'}: AreaProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 13" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.996094 0.402344H4.83817V1.17652H11.554V0.402344H15.3961V4.0648H14.5211V8.73989H15.3961V12.4023H11.554V11.6279H4.83817V12.4023H0.996094V8.73989H1.8709L1.8709 4.0648H0.996094V0.402344ZM11.554 10.4667V8.73989H13.3028V4.0648H11.554V2.33779H4.83817V4.0648H3.08912L3.08912 8.73989H4.83817V10.4667H11.554ZM2.21432 1.56361V2.90353H3.61995V1.56361H2.21432ZM2.21432 11.2411V9.90116H3.61995V11.2411H2.21432ZM12.7722 1.56361V2.90353H14.1779V1.56361H12.7722ZM12.7722 11.2411V9.90116H14.1779V11.2411H12.7722Z"
        fill={color}
      />
    </Svg>
  )
}

export default Area
