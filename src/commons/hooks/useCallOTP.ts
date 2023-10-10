import {useState} from 'react'
import {useAppSelector} from 'src/redux/hooks'
import {selectAppInfo} from 'src/redux/AppInfo/slice'
// import {generateOTP} from 'src/api/account'

export const useCallOTP = () => {
  const {OTP} = useAppSelector(selectAppInfo)
  const [otpType, setOTPType] = useState<'sms' | 'mail'>(OTP)

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
