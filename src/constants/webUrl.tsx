import type {ImageSourcePropType} from 'react-native'
import {IMAGES} from 'src/assets/images'
import Config from 'react-native-config'
export interface IListDashBoard {
  id: number
  icon: ImageSourcePropType
  label: string
  linkWeb: string
  screen: string
  iconSvg: any
  typeCategory: 'menu' | 'other'
  isTextGray: boolean
}

export const ListItemDashBoard: IListDashBoard[] = [
  {
    id: 1,
    icon: IMAGES.imageLetter,
    label: '目安箱',
    linkWeb: Config.LINK_MEYASUBAKO ?? '',
    screen: 'Elearning',
    iconSvg: IMAGES.people,
    typeCategory: 'menu',
    isTextGray: false,
  },
  {
    id: 2,
    icon: IMAGES.imageNews,
    label: '社内報',
    linkWeb: Config.LINK_MAGAZINE ?? '',
    screen: 'Elearning',
    iconSvg: IMAGES.news,
    typeCategory: 'menu',
    isTextGray: false,
  },
  {
    id: 3,
    icon: IMAGES.imageElearning,
    label: 'E-ラーニング',
    linkWeb: Config.LINK_ELEARNING ?? '',
    screen: 'Elearning',
    iconSvg: IMAGES.school,
    typeCategory: 'menu',
    isTextGray: false,
  },
  {
    id: 4,
    icon: IMAGES.imageCarAccident,
    label: 'GP/事故',
    linkWeb: Config.LINK_DAISEI_CLOUD_ADMIN ?? '',
    screen: 'Elearning',
    iconSvg: IMAGES.shakeHand,
    typeCategory: 'menu',
    isTextGray: false,
  },
  {
    id: 5,
    icon: IMAGES.imageDpos,
    label: 'Dpos',
    linkWeb: 'openAppDpos',
    screen: '',
    iconSvg: IMAGES.dpos,
    typeCategory: 'menu',
    isTextGray: false,
  },
  {
    id: 6,
    icon: IMAGES.imageHistory,
    label: '沿革',
    linkWeb: Config.LINK_DAISEI_HD_HISTORY ?? '',
    screen: 'Elearning',
    iconSvg: IMAGES.analyze,
    typeCategory: 'other',
    isTextGray: false,
  },
  {
    id: 7,
    icon: IMAGES.imageGroupBuilding,
    label: 'グループ拠点',
    linkWeb: '',
    screen: '',
    iconSvg: IMAGES.company,
    typeCategory: 'other',
    isTextGray: false,
  },
  {
    id: 8,
    icon: IMAGES.imageUserManual,
    label: 'マニュアル',
    linkWeb: '',
    screen: '',
    iconSvg: IMAGES.userManualIcon,
    typeCategory: 'other',
    isTextGray: true,
  },
  {
    id: 9,
    icon: IMAGES.iamgeSalary,
    label: '給与情報',
    linkWeb: '',
    screen: 'Salary',
    iconSvg: IMAGES.yourMoney,
    typeCategory: 'other',
    isTextGray: false,
  },
  {
    id: 10,
    icon: IMAGES.imageMeetingRoom,
    label: '会議資料',
    linkWeb: '',
    screen: 'MeetingVideo',
    iconSvg: IMAGES.meetingRoomIcon,
    typeCategory: 'other',
    isTextGray: false,
  },
  {
    id: 11,
    icon: IMAGES.imageSchedule,
    label: 'スケジュール',
    linkWeb: Config.LINK_CALENDER ?? '',
    screen: 'Elearning',
    iconSvg: IMAGES.calender,
    typeCategory: 'other',
    isTextGray: false,
  },
  {
    id: 12,
    icon: IMAGES.daiseiNews,
    label: 'ニュースリリース',
    linkWeb: Config.LINK_DAISEI_HD_NEWS ?? '',
    screen: 'Elearning',
    iconSvg: IMAGES.daiseiNewsIcon,
    typeCategory: 'other',
    isTextGray: false,
  },
]
