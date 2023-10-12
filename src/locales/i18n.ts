import i18n from 'i18n-js'
import * as RNLocalize from 'react-native-localize'
import en from './en'
import vi from './vi'

i18n.translations = {
  en,
  vi,
}

const locale = RNLocalize.getLocales()[0].languageCode
i18n.locale = locale

export default i18n
