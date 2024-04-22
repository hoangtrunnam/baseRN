import React from 'react'
import Svg, {Path} from 'react-native-svg'

interface ISize {
  width?: number
  height?: number
  color?: string
}

const BuildingPropertyDetail = ({width = 20, height = 20, color = '#C04C50'}: ISize) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 27 24" fill="none">
      <Path
        d="M18.5192 13.0474C18.7651 12.834 19.1519 12.834 19.3979 13.0474L24.0663 17.0999C24.3208 17.3208 24.3303 17.6876 24.0877 17.9192C23.845 18.1508 23.4421 18.1595 23.1876 17.9387L23.0965 17.8595V20.4205C23.0965 20.7406 22.8114 21 22.4599 21H20.2317V18.4889H17.6853V21H15.4572C15.1056 21 14.8206 20.7406 14.8206 20.4205V17.8595L14.7294 17.9387C14.475 18.1595 14.072 18.1508 13.8294 17.9192C13.5867 17.6876 13.5963 17.3208 13.8507 17.0999L18.5192 13.0474Z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.90011 3C4.02114 3 3.30859 3.68103 3.30859 4.52113V19.2254C3.30859 20.0654 4.02114 20.7465 4.90011 20.7465H13.2549C13.2379 20.641 13.2291 20.5323 13.2291 20.4205V19.3672C13.0403 19.2708 12.8634 19.1469 12.7048 18.9955C11.816 18.1472 11.8559 16.7768 12.7807 15.9739L17.4492 11.9214C17.8058 11.6118 18.243 11.4317 18.6933 11.3811V4.52113C18.6933 3.68103 17.9807 3 17.1018 3H4.90011ZM7.28739 7.1831C6.92115 7.1831 6.62426 7.46686 6.62426 7.8169C6.62426 8.16694 6.92115 8.4507 7.28739 8.4507H14.7145C15.0807 8.4507 15.3776 8.16694 15.3776 7.8169C15.3776 7.46686 15.0807 7.1831 14.7145 7.1831H7.28739ZM6.62426 10.8592C6.62426 10.5091 6.92115 10.2254 7.28739 10.2254H10.4704C10.8367 10.2254 11.1336 10.5091 11.1336 10.8592C11.1336 11.2092 10.8367 11.493 10.4704 11.493H7.28739C6.92115 11.493 6.62426 11.2092 6.62426 10.8592ZM7.28739 13.2676C6.92115 13.2676 6.62426 13.5514 6.62426 13.9014C6.62426 14.2514 6.92115 14.5352 7.28739 14.5352H10.4704C10.8367 14.5352 11.1336 14.2514 11.1336 13.9014C11.1336 13.5514 10.8367 13.2676 10.4704 13.2676H7.28739Z"
        fill={color}
      />
    </Svg>
  )
}

export default BuildingPropertyDetail