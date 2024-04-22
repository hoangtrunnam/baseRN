/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react'
import {ActivityIndicator, Image, Platform, StyleSheet, View} from 'react-native'
import FastImage, {FastImageProps} from 'react-native-fast-image'
import Animated from 'react-native-reanimated'
import {IMAGES} from 'src/assets/images'

interface ThumbFallbackProps extends Omit<FastImageProps, 'source'> {
  sourceImgDefault?: string
}

// @ts-ignore
const FastImageAnimated = Animated.createAnimatedComponent(FastImage)
const BoxAnimated = Animated.createAnimatedComponent(View)

export interface ThumbProps extends FastImageProps {
  defaultImage?: Image | any
}

/**
 * component để hiển thị nền khi ảnh bị lỗi không load đc
 * @param props
 */
export const ThumbFallback: React.FC<ThumbFallbackProps> = (props: any) => {
  const {defaultImage = IMAGES.avatarDefault} = props
  return <Image {...props} source={defaultImage} resizeMode="contain" />
}

export interface IProps {
  defaultImage?: Image | any
  style?: any
  onError?: any
  onLoad?: any
  children?: any
  source?: any
}

/**
 * component thay thế hiển thị ảnh của app
 * sử dụng lại FastImage để hiển thị
 * handler loading + error
 * @param props
 */
export const Thumb: React.FC<ThumbProps> = (props: IProps) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const {style, onError, onLoad, children, source} = props
  const {
    borderRadius,
    borderTopRightRadius,
    borderBottomRightRadius,
    borderBottomLeftRadius,
    borderTopLeftRadius,
  } = StyleSheet.flatten(style || {})

  useEffect(() => {
    if (Platform.OS === 'android') {
      // @ts-ignore
      if (source.uri === '') {
        setLoading(false)
        // setError(true)
      }
    }
    return () => {
      setError(false)
      // setLoading(true)
    }
  }, [source])

  const mouted = useRef<boolean>(true)
  useEffect(() => {
    mouted.current = true
    return () => {
      mouted.current = false
    }
  }, [])

  return (
    <BoxAnimated style={style}>
      {error && !loading ? <ThumbFallback {...props} /> : null}
      {error ? null : (
        <FastImageAnimated
          {...props}
          onLoad={(e: any) => {
            setLoading(false)
            if (typeof onLoad === 'function') {
              onLoad(e)
            }
          }}
          onError={() => {
            setError(true)
            setLoading(false)
            if (typeof onError === 'function') {
              onError()
            }
          }}
        />
      )}
      {loading ? (
        <View
          style={{
            borderRadius,
            borderTopRightRadius,
            borderBottomRightRadius,
            borderBottomLeftRadius,
            borderTopLeftRadius,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.4)',
          }}>
          <ActivityIndicator color={'#62267B'} size="small" />
        </View>
      ) : null}
      {children}
    </BoxAnimated>
  )
}
