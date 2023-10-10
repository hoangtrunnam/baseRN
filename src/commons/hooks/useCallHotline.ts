import {Linking} from 'react-native'

export const useCallHotline = (phoneNumber = '18006085') => {
  const handleCallHotline = () => {
    Linking.openURL(`tel:${phoneNumber}`)
  }

  return {handleCallHotline}
}
