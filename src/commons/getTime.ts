import moment from 'moment-timezone'

/** func lấy ra ngày từ trong định dạng thời gian chuẩn
 * 2021-06-25T23:59:59.000+07:00 -> format: (dd-mm-yyyy, ...)
 */
export const convertDayFromString: (value?: string | Date, format?: string) => string = (
  value = '',
  format = 'DD/MM/yyyy'
) => {
  if (!value) return ''
  return moment(value).format(format)
}

export const convertClassify = (Classify: number) => {
  switch (Classify) {
    case 1:
      return 'PRO'
    case 2:
      return 'PRO A'
    case 3:
      return 'PNote'
    default:
      return ''
  }
}
export const convertType = (type: string = 'M') => {
  switch (type) {
    case 'D':
      return 'Ngày'
    case 'W':
      return 'Tuần'
    case 'M':
      return 'Tháng'
    case 'Q':
      return 'Quý'
    case 'Y':
      return 'Năm'
    default:
      return ''
  }
}
export const convertInterestType = (interestType: number) => {
  switch (interestType) {
    case 1:
      return 'định kỳ'
    case 2:
      return 'cuối kỳ'
    default:
      return ''
  }
}

// function tính thời gian còn lại
export const TimeRemain = (endTime: any) => {
  const curent = moment()
  const ms = moment(endTime, 'DD/MM/YYYY HH:mm:ss').diff(moment(curent, 'DD/MM/YYYY HH:mm:ss'))
  const d = moment.duration(ms)
  const s = Math.floor(d.asHours()) + moment.utc(ms).format(':mm:ss')
  return s
}

// function convert từ giây sang định dạng hh:mm:ss
export const convertSecond = (seconds: number) => {
  if (seconds >= 3600) {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const remainingSeconds = seconds % 60

    const formattedHours = hours.toString()
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString()
    const formattedSeconds =
      remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds.toString()

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
  }
  if (seconds >= 60) {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60

    const formattedMinutes = minutes.toString()
    const formattedSeconds =
      remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds.toString()

    return `${formattedMinutes}:${formattedSeconds}`
  }
  if (seconds < 10) {
    return `0:0${seconds.toFixed(0)}`
  }
  return `0:${Math.floor(seconds)}`
}
