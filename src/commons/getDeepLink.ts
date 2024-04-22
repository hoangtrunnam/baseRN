import {Platform} from 'react-native'
import Config from 'react-native-config'

export const getDposAppUrl = () => {
  const environment = Config.IOS_APP_ID
  switch (environment) {
    case 'com.hakonehotel.dev.veho':
      return Platform.OS === 'ios' ? 'com.vehoworks.DposApplicationMobile://' : 'com.dposapp://'
    case 'com.stage.daseipotal.veho':
      return Platform.OS === 'ios' ? 'org.name.DposApp://' : 'com.dposappstage://'
    default: // prod
      return Platform.OS === 'ios' ? 'org.name.DposApp.jp://' : 'com.dposappproduct://'
  }
}
