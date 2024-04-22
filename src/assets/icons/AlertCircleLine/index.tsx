import React from 'react'
import Svg, {Path} from 'react-native-svg'

type AlertCircleFillProps = {
  width?: number
  height?: number
  color?: string
}

const AlertCircleFill = ({width = 40, height = 40, color}: AlertCircleFillProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 14.1709C11.4081 14.1709 14.1709 11.4081 14.1709 8C14.1709 4.59191 11.4081 1.82911 8 1.82911C4.59191 1.82911 1.82911 4.59191 1.82911 8C1.82911 11.4081 4.59191 14.1709 8 14.1709ZM15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5C12.1421 0.5 15.5 3.85786 15.5 8Z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99991 11.0376C7.58046 11.0376 7.24042 10.6976 7.24042 10.2781V7.54395C7.24042 7.1245 7.58046 6.78446 7.99991 6.78446C8.41937 6.78446 8.75941 7.1245 8.75941 7.54395V10.2781C8.75941 10.6976 8.41937 11.0376 7.99991 11.0376Z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.75941 5.26605C8.75941 5.68551 8.41937 6.02554 7.99991 6.02554H7.99308C7.57362 6.02554 7.23358 5.68551 7.23358 5.26605C7.23358 4.84659 7.57362 4.50656 7.99308 4.50656H7.99991C8.41937 4.50656 8.75941 4.84659 8.75941 5.26605Z"
        fill={color}
      />
    </Svg>
  )
}

export default AlertCircleFill
