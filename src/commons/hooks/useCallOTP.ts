import {useState} from 'react'
// import {generateOTP} from 'src/api/account'

export const useCallOTP = () => {
  const [otpType, setOTPType] = useState<'sms' | 'mail'>()

  const handleCallOTP = async () => {
    // return generateOTP(otpType === 'sms' ? 'sms' : 'mail')
  }

  const handleSetOTPStyle = async () => {
    const newOTPStyle = otpType === 'sms' ? 'mail' : 'sms'
    setOTPType(newOTPStyle)
    // return generateOTP(newOTPStyle)
  }

  return {handleCallOTP, handleSetOTPStyle, otpType}
}
