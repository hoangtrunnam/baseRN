import React from 'react'
import Svg, {Path} from 'react-native-svg'

interface IBondFillProps {
  width?: number
  height?: number
  color?: string
}

const BondFill = ({width = 40, height = 40}: IBondFillProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 40 40" fill="none">
      <Path
        d="M0.5 20C0.5 12.5277 1.75183 7.70527 4.72855 4.72855C7.70527 1.75183 12.5277 0.5 20 0.5C27.4723 0.5 32.2947 1.75183 35.2715 4.72855C38.2482 7.70527 39.5 12.5277 39.5 20C39.5 27.4723 38.2482 32.2947 35.2715 35.2715C32.2947 38.2482 27.4723 39.5 20 39.5C12.5277 39.5 7.70527 38.2482 4.72855 35.2715C1.75183 32.2947 0.5 27.4723 0.5 20Z"
        fill="white"
        stroke="#F3F4F6"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.0938 11.925H13.9062V28.075H22.1094V24.5125C22.1094 23.7255 22.739 23.0875 23.5156 23.0875H26.0938V11.925ZM25.1613 24.5125L23.5156 26.6388V24.5125H25.1613ZM27.5 23.8V11.925C27.5 11.138 26.8704 10.5 26.0938 10.5H13.9062C13.1296 10.5 12.5 11.138 12.5 11.925V28.075C12.5 28.862 13.1296 29.5 13.9062 29.5H23.0882L27.5 23.8Z"
        fill="#0E1C45"
      />
      <Path
        d="M20.5294 15.8404V15.5C20.5294 15.1248 20.2252 14.8206 19.85 14.8206C19.4748 14.8206 19.1706 15.1248 19.1706 15.5V15.8404H18.8206C18.2577 15.8404 17.7182 16.066 17.3206 16.4672C16.9231 16.8683 16.7 17.412 16.7 17.9787C16.7 18.5454 16.9231 19.0891 17.3206 19.4902C17.7182 19.8914 18.2577 20.117 18.8206 20.117H20.8794C21.081 20.117 21.2746 20.1978 21.4176 20.342C21.5606 20.4863 21.6412 20.6823 21.6412 20.887C21.6412 21.0916 21.5606 21.2876 21.4176 21.4319C21.2746 21.5761 21.081 21.6569 20.8794 21.6569H17.8063C17.4284 21.6569 17.1221 21.9633 17.1221 22.3411C17.1221 22.719 17.4284 23.0253 17.8063 23.0253H19.1706V23.4412C19.1706 23.8164 19.4748 24.1206 19.85 24.1206C20.2252 24.1206 20.5294 23.8164 20.5294 23.4412V23.0253H20.8794C21.4423 23.0253 21.9818 22.7997 22.3794 22.3985C22.7769 21.9974 23 21.4537 23 20.887C23 20.3203 22.7769 19.7765 22.3794 19.3754C21.9818 18.9743 21.4423 18.7487 20.8794 18.7487H18.8206C18.619 18.7487 18.4254 18.6679 18.2824 18.5236C18.1394 18.3793 18.0588 18.1833 18.0588 17.9787C18.0588 17.7741 18.1394 17.5781 18.2824 17.4338C18.4254 17.2895 18.619 17.2087 18.8206 17.2087H21.642C22.0199 17.2087 22.3262 16.9024 22.3262 16.5246C22.3262 16.1467 22.0199 15.8404 21.642 15.8404H20.5294Z"
        fill="#0E1C45"
      />
    </Svg>
  )
}

export default BondFill