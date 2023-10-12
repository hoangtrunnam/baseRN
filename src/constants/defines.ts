import {Platform} from 'react-native'
import type {AppColor} from 'src/configs/colors'

export type ValidateType = {
  min: number
  max: number
  regex: any
  format: any
  require: boolean
  emoji: boolean
  special: boolean
  error: {
    required?: string
    format?: string
    length?: string
  }
  space: boolean
}

export const validate: {
  email: ValidateType
  name: ValidateType
  phone: ValidateType
  password: ValidateType
  address: ValidateType
} = {
  email: {
    min: 1,
    max: 150,
    regex: '',
    require: true,
    emoji: false,
    format: '',
    special: true,
    error: {
      required: 'errors.email.required',
      format: 'errors.email.format',
    },
    space: false,
  },
  name: {
    min: 1,
    max: 150,
    regex: '',
    require: true,
    format: '',
    emoji: false,
    special: false,
    error: {
      required: 'errors.user_name.required',
      format: 'errors.user_name.format',
      length: 'errors.user_name.length',
    },
    space: true,
  },
  phone: {
    min: 9,
    max: 15,
    regex: '',
    require: true,
    format: '',
    emoji: false,
    special: true,
    error: {
      required: 'errors.phone.required',
      format: 'errors.phone.format',
      length: 'errors.phone.length',
    },
    space: false,
  },
  password: {
    min: 8,
    max: 25,
    regex: '',
    require: true,
    format: '',
    emoji: false,
    special: true,
    error: {
      required: 'errors.password.required',
      format: 'errors.password.format',
      length: 'errors.password.length',
    },
    space: false,
  },
  address: {
    min: 0,
    max: 350,
    regex: '',
    require: true,
    format: '',
    emoji: false,
    special: true,
    error: {
      required: 'errors.address.required',
    },
    space: true,
  },
}

/** phần này bắt buộc key = value
 * nếu không sẽ ảnh hưởng đến change language
 */
export const languageKey = {
  ja: 'ja',
  en: 'en',
  vi: 'vi',
  ko: 'ko',
}

export const ProvinceLabel: Record<number, string> = {
  3: 'labels.provinces.hanoi',
  5: 'labels.provinces.hcm',
  2: 'labels.provinces.danang',
  14: 'labels.provinces.binhduong',
}

export interface ProvinceType {
  id: number
  label: string
}

export const province_list: ProvinceType[] = [
  {
    id: 3,
    label: ProvinceLabel[3],
  },
  {
    id: 5,
    label: ProvinceLabel[5],
  },
  {
    id: 2,
    label: ProvinceLabel[2],
  },
  {
    id: 14,
    label: ProvinceLabel[14],
  },
]

export const OrderStatusName: Record<number, string> = {
  0: 'labels.order_status.new',
  1: 'labels.order_status.cancel',
  2: 'labels.order_status.confirmed',
  3: 'labels.order_status.shipping',
  4: 'labels.order_status.success',
  5: 'labels.order_status.cancel_by_shipping',
  6: 'labels.order_status.assigning',
  7: 'labels.order_status.finish_cooking',
  8: 'labels.order_status.shipper_was_found',
}

export const OrderStatusColor: Record<number, keyof AppColor> = {
  0: 'h_F10000',
  1: 'h_F10000',
  2: 'h_F18603',
  3: 'h_007AFF',
  4: 'h_1DAC0E',
  5: 'h_F10000',
  6: 'h_D73FA3',
  7: 'h_007AFF',
  8: 'h_007AFF',
}

export const OrderStatusNumberFromText: Record<string, number> = {
  init: 0,
  cancel: 1,
  confirm: 2,
  shipping: 3,
  done: 4,
  cancel_shipping: 5,
  assigning: 6,
  finish_cooking: 7,
  shipper_was_found: 8,
}

export const dayValue: Record<string, string> = {
  mon: 'labels.days.mon',
  tue: 'labels.days.tue',
  wed: 'labels.days.wed',
  thu: 'labels.days.thu',
  fri: 'labels.days.fri',
  sat: 'labels.days.sat',
  sun: 'labels.days.sun',
}

export const format_date = {
  HH_mm_DD_MM_YYYY: 'HH:mm DD-MM-YYYY',
  HH_mm: 'HH:mm',
  DD_MM_YYYY: 'DD-MM-YYYY',
  DD_MM: 'DD/MM',
  DD_MM_YY: 'DD/MM/YY',
  DD_MM_YYYY_HH_mm: 'DD-MM-YYYY HH:mm',
}
export const limitOtpTime = 60

export interface E {
  fish: ''
  freeship: ''
  discount: ''
}

export interface BannerType {
  event: ''
  banner: ''
}

// Lấy province key theo id
export const provinceKey: Record<number, string> = {
  3: 'HN',
  5: 'HCM',
  2: 'DN',
  14: 'BD',
}

export const banner_type: {
  [K in keyof BannerType]: K
} = {
  banner: 'banner',
  event: 'event',
}

export const event_type: {
  [K in keyof E]: K
} = {
  fish: 'fish',
  freeship: 'freeship',
  discount: 'discount',
}

/** Return link of app on Store & Google Play */
export const app_link = Platform.select({
  ios: '',
  android: '',
})

export const deliveryTypeValue = {
  delivery: 0,
  pickUp: 1,
}

/**
 * Payment type value
 */
export const paymentTypeValue = {
  cash: 'cod',
  epay_atm: 'atm',
  epay_cc: 'cc',
  epay_ew: 'ew',
  alepay_cc: 'card',
}

/**
 * Payment method
 */
export const paymentPartner = {
  epay: 'epay',
  alepay: 'alepay',
}

/**
 * param truyền lên cho payment
 */
export const paymentMethodParam = {
  international_card: 'international_card',
  atm_card: 'atm_card',
  zalo_pay: 'zalo_pay',
  cod: 'cod',
}

/** notification type */
/** notification type: thông báo từ Firebase */
export const notification_type: Record<string, string> = {
  deliveryPointHistory: 'DeliveryPointHistory',
}

/** thông báo từ admin tới user: bad weather, stop_service */
export const systemNotificationType = {
  badWeather: 'bad_weather',
  stopService: 'stop_service',
}
