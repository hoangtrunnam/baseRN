/* eslint-disable react-native/no-inline-styles */
import {
  View,
  InteractionManager,
  Text,
  Modal,
  StyleSheet,
  Animated,
} from 'react-native'
import React, {useEffect, useRef, useState} from 'react'
import Config from 'react-native-config'
import codePush, {
  type DownloadProgress,
  type SyncOptions,
  type UpdateDialog,
} from 'react-native-code-push'
import Toast from 'react-native-toast-message'
import {DIMENSION} from '../commons'

const codePushKey = DIMENSION.isIos
  ? Config.CODEPUSH_IOS_DEVELOPMENT_KEY
  : Config.CODEPUSH_ANDROID_DEVELOPMENT_KEY

const updateDialogOptions: UpdateDialog = {
  title: 'Cập Nhật Mới',
  optionalUpdateMessage: 'Có bản cập nhật mới. Bạn có muốn cài đặt không?',
  optionalIgnoreButtonLabel: 'Bỏ qua',
  optionalInstallButtonLabel: 'Cài đặt',
}

const syncCodepushOption: SyncOptions = {
  deploymentKey: codePushKey,
  installMode: codePush.InstallMode.ON_NEXT_RESTART,
  mandatoryInstallMode: codePush.InstallMode.ON_NEXT_RESTART,
  updateDialog: updateDialogOptions,
}

const CodePushDialog = () => {
  console.log('codePushKey', codePushKey)
  const progressAnim = useRef(new Animated.Value(0)).current
  const [isVisible, setIsVisible] = useState(false)
  const [percentProgress, setPercentProgress] = useState<number>(0)
  const [content, setContent] = useState({
    description: '',
    version: '',
  })
  const [status, setStatus] = useState('Checking for update...')
  const willMount = useRef(true)
  if (willMount.current) {
    codePush.disallowRestart()
  }
  willMount.current = false

  const handleCheckStatusCodepush = (statusCodePush: codePush.SyncStatus) => {
    switch (statusCodePush) {
      case codePush.SyncStatus.CHECKING_FOR_UPDATE:
        setStatus('codepush is updating')
        console.log('run updating')
        break
      case codePush.SyncStatus.DOWNLOADING_PACKAGE:
        setStatus('Downloading package...')
        console.log('run Downloading')

        break
      case codePush.SyncStatus.INSTALLING_UPDATE:
        setStatus('Installing update')
        console.log('run Installing')
        break
      case codePush.SyncStatus.UP_TO_DATE:
        setStatus('Version is up to date')
        console.log('run Version is up to date')
        setIsVisible(false)
        break
      case codePush.SyncStatus.UPDATE_INSTALLED:
        setStatus('Update installed')
        console.log('run installed')
        setIsVisible(false)
        break
      case codePush.SyncStatus.UPDATE_IGNORED:
        setStatus('UPDATE_IGNORED')
        console.log('run UPDATE_IGNORED')
        break
      case codePush.SyncStatus.UPDATE_INSTALLED:
        setStatus('UPDATE_INSTALLED')
        console.log('run UPDATE_INSTALLED')
        break
      case codePush.SyncStatus.UNKNOWN_ERROR:
        setStatus('UNKNOWN_ERROR')
        console.log('run UNKNOWN_ERROR')
    }
  }

  const handleDownLoad = (progress: DownloadProgress) => {
    setIsVisible(true)

    // Tính toán phần trăm tiến trình
    const currentProgress = progress.receivedBytes / progress.totalBytes

    setPercentProgress(currentProgress * 100)

    // Chuyển đổi phần trăm thành giá trị width
    const width = currentProgress * 250

    // Cập nhật giá trị của progressAnim
    Animated.timing(progressAnim, {
      toValue: width,
      duration: 500,
      useNativeDriver: false,
    }).start()

    if (currentProgress === 1) {
      Toast.show({
        type: 'success',
        text1: `Cập nhật thành công ${content.version !== '' ? 'v' : ''}${
          content.version
        } 😎`.trim(),
      })
    }
  }

  const syncCodepush = async () => {
    try {
      await codePush.sync(
        syncCodepushOption,
        statusCodePush => handleCheckStatusCodepush(statusCodePush),
        progress => handleDownLoad(progress),
      )
    } catch (error) {
      console.log("🚀 ~ syncCodepush ~ error:", error)
      
    }
  }

  const checkUpdate = () => {
    codePush
      .checkForUpdate(codePushKey)
      .then(update => {
        syncCodepush()
        if (update) {
          // setIsVisible(true)
          setContent({
            description: update.description,
            version: update.appVersion,
          })
        }
      })
      .catch(error => {
        console.log('Code push error ============>', error)
      })
  }

  useEffect(() => {
    InteractionManager.runAfterInteractions(checkUpdate)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.modalText}>{status}</Text>
            <Text style={styles.modalText}>{percentProgress.toFixed()}%</Text>
          </View>
          <View
            style={{
              backgroundColor: '#ffffff',
              height: 10,
              width: 250,
              marginTop: 12,
              borderWidth: 1,
              borderRadius: 5,
              borderColor: '#FF6E00',
            }}>
            <Animated.View
              style={{
                height: 10,
                borderRadius: 4.5,
                width: progressAnim,
                backgroundColor: '#FF6E00',
              }}
            />
          </View>
          {content?.description && (
            <Text style={styles.modalText} numberOfLines={5}>
              {content?.description}
            </Text>
          )}
        </View>
      </View>
    </Modal>
  )
}

export default CodePushDialog

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    marginHorizontal: 8,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 12,
  },
})
