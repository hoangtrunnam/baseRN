/**
 * Function xoá số 0 của phone
 * @param phone
 * @returns
 */
export const removePhonePrefix = (phone: string) => {
  let convertPhone = phone

  const getFirstCap = phone[0]

  if (getFirstCap === '0') {
    convertPhone = phone.substring(1)
  }

  return convertPhone
}
