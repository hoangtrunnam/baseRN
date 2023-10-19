/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useRef} from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Animated,
  View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native'
import {DIMENSION} from 'src/commons'
import type {AlertContent} from './types'
import {defaultColors} from 'src/configs/colors'
import {ButtonCustom} from '../Button/ButtonCustom'
import IconAdd from 'src/assets/icons/IconAdd'

interface IProps {
  value: AlertContent
  onClose?: (id: number) => void
}

const Alert: React.FC<IProps> = ({value, onClose}) => {
  const {id, title, content, cancelable, actions, callBackClose} = value
  // const animation = useValue<number>(0)
  const animation = useRef(new Animated.Value(0)).current

  const open = useCallback(() => {
    animation.setValue(0)
    Animated.spring(animation, {
      toValue: 1,
      damping: 4,
      mass: 0.1,
      stiffness: 65,

      // overshootClamping: 1,
      restSpeedThreshold: 0.1,
      restDisplacementThreshold: 0.1,
      useNativeDriver: true,
    }).start()
  }, [animation])

  const close = (callback?: () => void) => () => {
    let finished = false
    Animated.spring(animation, {
      toValue: 2,
      damping: 4,
      mass: 0.1,
      stiffness: 60,

      // overshootClamping: 1,
      restSpeedThreshold: 0.9,
      restDisplacementThreshold: 0.9,
      useNativeDriver: true,
    }).start(() => {
      if (!finished) {
        finished = true
        if (typeof onClose === 'function') {
          onClose(id)
        }
        if (typeof callback === 'function') {
          callback()
        }
        callBackClose?.()
      }
    })
  }

  useEffect(() => {
    open()
  }, [open])

  const renderButtonAction = (text: string) => {
    return (
      <Text style={styles.btnActionText} numberOfLines={1}>
        {text}
      </Text>
    )
  }

  const renderAction = () => {
    if (!Array.isArray(actions)) {
      return (
        <TouchableOpacity style={styles.action} onPress={close()}>
          {renderButtonAction('OK')}
        </TouchableOpacity>
      )
    }

    if (actions.length === 1) {
      return (
        // <TouchableOpacity style={styles.action} onPress={close(actions[0].onPress)}>
        //   {renderButtonAction(actions[0].text)}
        // </TouchableOpacity>
        <View style={styles.viewActions}>
          <ButtonCustom
            textButton={actions[0].text}
            styleButton={{
              backgroundColor: defaultColors.PrimaryA500,
            }}
            styleText={{color: defaultColors.h_ffffff}}
            onPress={close(actions[0].onPress)}
          />
        </View>
      )
    }

    if (actions.length === 2 && actions[0].text.length < 13 && actions[1].text.length < 13) {
      return (
        <View style={[styles.viewActions, styles.twoAction]}>
          <View style={styles.two}>
            <ButtonCustom
              textButton={actions[0].text}
              styleButton={{
                backgroundColor: defaultColors.PrimaryA200,
              }}
              styleText={{color: defaultColors.PrimaryA500}}
              onPress={close(actions[0].onPress)}
            />
          </View>
          <View style={styles.two}>
            <ButtonCustom
              textButton={actions[1].text}
              styleButton={{
                backgroundColor: defaultColors.PrimaryA500,
              }}
              styleText={{color: defaultColors.h_ffffff}}
              onPress={close(actions[1].onPress)}
            />
          </View>
        </View>
      )
    }
    return (
      <>
        {actions.map((item, index) => (
          <TouchableOpacity
            key={`${item.text}-${index}`}
            style={styles.action}
            onPress={close(actions[index].onPress)}>
            {renderButtonAction(actions[index].text)}
          </TouchableOpacity>
        ))}
      </>
    )
  }

  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFillObject,
        styles.container,
        {
          opacity: animation.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [0, 1, 0.05],
            extrapolate: 'clamp',
          }),
        },
      ]}>
      {cancelable ? (
        <TouchableOpacity
          activeOpacity={0}
          style={[StyleSheet.absoluteFillObject]}
          onPress={close()}>
          <View />
        </TouchableOpacity>
      ) : null}
      <Animated.View
        style={[
          styles.content,
          {
            transform: [
              {
                scale: animation.interpolate({
                  inputRange: [0, 1, 2],
                  outputRange: [1.15, 1, 1],
                  extrapolate: 'clamp',
                }),
              },
            ],
          },
        ]}>
        <View style={styles.viewLabel}>
          <View style={styles.title}>
            <View style={styles.icAdd}>
              <TouchableWithoutFeedback onPress={close()}>
                <IconAdd />
              </TouchableWithoutFeedback>
            </View>
            <View
              style={{
                justifyContent: 'center',
              }}>
              <Text style={styles.textTitle}>{title}</Text>
            </View>
            <View style={{width: 32, height: 32}} />
          </View>
          <Text style={styles.textContent}>{content}</Text>
        </View>

        {renderAction()}
      </Animated.View>
    </Animated.View>
  )
}

export default Alert

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.18)',
  },
  content: {
    // alignItems: 'center',
    // justifyContent: 'center',
    width: DIMENSION.width - 32,
    backgroundColor: '#fff',
    borderRadius: 16,
  },
  viewLabel: {
    paddingBottom: 8,
  },
  viewActions: {
    width: '100%',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  twoAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  action: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#848484',
    alignItems: 'center',
    paddingVertical: 14,
    width: '100%',
  },
  two: {
    width: '48%',
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  icAdd: {
    alignSelf: 'flex-start',
    padding: 8,
  },
  btnActionText: {
    fontSize: 16,
    color: defaultColors.PrimaryA500,
    fontWeight: 'normal',
  },
  textTitle: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
  textContent: {
    marginTop: 8,
    padding: 16,
    textAlign: 'center',
    lineHeight: 18,
    fontSize: 14,
    color: defaultColors.h_000000,
  },
})
