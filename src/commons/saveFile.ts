import ReactNativeBlobUtil from 'react-native-blob-util'
import {Platform} from 'react-native'
import {convertLinkImage} from 'src/commons/objectUtil'

export const handleSaveFileCache = async (items: any[], token: any, getHttpLink: any) => {
  const {fs} = ReactNativeBlobUtil
  try {
    const downloadPromises = items.map(async item => {
      const http = getHttpLink(item)
      const convertedLink = convertLinkImage(http)

      const path = `${Platform.OS === 'ios' ? fs.dirs.CacheDir : fs.dirs.CacheDir}/EPIC_Contract_${
        item.id
      }.pdf`

      await ReactNativeBlobUtil.config({
        fileCache: true,
        appendExt: 'pdf',
        path,
      }).fetch('GET', convertedLink, {Authorization: `Bearer ${token}`})
    })
    await Promise.all(downloadPromises)
  } catch (error) {
    console.log('err', error)
  }
}
