export const TransferPercents = (number_one: number = 0, number_two: number = 100): string => {
  if (number_two === 0) {
    return '0.00%'.replaceAll('.', ',')
  }
  const percent = Math.round(number_one * 100) / number_two
  return `${percent.toFixed(2)}%`.replaceAll('.', ',')
}

export const formatPhoneNumber = (phoneNumberString: string | number): string => {
  const cleaned = `${phoneNumberString}`.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{4})(\d{3})(\d{3})$/)
  if (match) {
    return `${match[1]} ${match[2]} ${match[3]}`
  }
  return ''
}

export const formatPhoneNumberNature = (
  phoneNumberString: string | number,
  nature: string = '84'
): string => {
  const cleaned = `${phoneNumberString}`.replace(/\D/g, '').slice(1, 10)
  const match = cleaned.match(/^(\d{2})(\d{3})(\d{4})$/)
  if (match) {
    return `+${nature}${match[1]} ${match[2]} ${match[3]}`
  }
  return ''
}
