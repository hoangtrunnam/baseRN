// import regex from '@dvh-module/core/regex'
// import validator from '@dvh-module/core/validator'
import moment from 'moment'

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

export type V = (
  value: string,
  form?: ValidateType
) => {
  pass: boolean
  error?: string
}

export type ConfirmPasswordType = (
  password: string,
  confirmPassword: string
) => {
  pass: boolean
  error?: string
}

// export const checkName: V = (value: string) => {
//   return validator(value, validate.name)
// }

// export const checkEmail: V = (value: string) => {
//   return validator(value, validate.email)
// }

// export const checkPhone: V = (value: string) => {
//   return validator(value, validate.phone)
// }

// export const checkPassword: V = (value: string) => {
//   return validator(value, validate.password)
// }
// export const checkAddress: V = (value: string) => {
//   return validator(value, validate.address)
// }

export const checkConfirmPassword: ConfirmPasswordType = (
  password: string,
  confirmPassword: string
) => {
  let error = ''
  let pass = true
  // Check confirm password không được để rỗng
  if (!confirmPassword) {
    error = 'errors.confirm_password.required'
    pass = false
  } else if (password !== confirmPassword) {
    // Check confirm password phải == password
    error = 'errors.password.confirm_password'
    pass = false
  }

  return {
    pass,
    error,
  }
}

// export const formatValue: (value: string, form: ValidateType) => string = (value, form) => {
//   let real_value = value.slice(0, form.max ?? 10000)

//   if (!form.emoji) {
//     real_value = real_value.replace(regex.emoji, '')
//   }

//   if (!form.special) {
//     real_value = real_value.replace(regex.special, '')
//   }

//   if (!form.space) {
//     real_value = real_value.replace(regex.space, '')
//   }

//   return real_value.replace(form.format, '')
// }
// export const formatName = (value: string) => formatValue(value, validate.name)

// export const formatEmail = (value: string) => formatValue(value, validate.email)

// export const formatPhone = (value: string) => formatValue(value, validate.phone)

// export const formatPassword = (value: string) => formatValue(value, validate.password)

// export const formatAddress = (value: string) => formatValue(value, validate.address)

export const isValidPhoneNumber = (value: string) => {
  if (value === '02473008593') {
    return true
  }
  if (value) {
    return /(09|03|07|08|05)+([0-9]{8})\b/g.test(value)
  }
  return false
}

export const isValidEmail = (value: string) => {
  if (value) {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  }
  return false
}

export const isValidCMND = (value: string) => /^[0-9]{9,12}$/.test(value)

export const isValidCCCD = (value: string) => /^.{1,12}$/.test(value)

export const isValidPassword = (value: string) => {
  let pass = false
  let containUpperCase = false
  let containLetterAndNumber = false
  let minCharater = false
  const regexAtleastOneUppercase = /^(?=.*[A-Z])/
  const regexLetterAndNumber = /^(?=.*[a-z])(?=.*[0-9])/
  const regexMinCharacters = /.{8,}/
  if (regexAtleastOneUppercase.test(value)) {
    containUpperCase = true
  }
  if (regexLetterAndNumber.test(value)) {
    containLetterAndNumber = true
  }
  if (regexMinCharacters.test(value)) {
    minCharater = true
  }
  if (containUpperCase && containLetterAndNumber && minCharater) {
    pass = true
  }
  return {
    containUpperCase,
    containLetterAndNumber,
    minCharater,
    pass,
  }
}

export const nonAccentVietnamese = (str: string) => {
  if (str) {
    str = str.toLowerCase()
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i')
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
    str = str.replace(/đ/g, 'd')
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '') // Huyền sắc hỏi ngã nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, '') // Â, Ê, Ă, Ơ, Ư
    return str
  }
  return ''
}

export const requestID = (idUser: string | number) => {
  const id = `${'EPIC'}-${idUser}-${moment().unix()}`
  return id
}

export const containNumberOnly = (str: string) => {
  if (str) {
    const regexNumber = /^\d+$/
    return regexNumber.test(str)
  }
  return true
}
