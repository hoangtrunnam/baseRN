import React, {forwardRef, ReactNode} from 'react'
import {View} from 'react-native'
import {Modalize, ModalizeProps} from 'react-native-modalize'
import {Portal} from 'react-native-portalize'
import {DIMENSION} from 'src/commons/dimension'

interface IBottomPopupModalizeProps {
  children: ReactNode
  modalizeProps: ModalizeProps
  modalHeight?: number
}

const BottomPopupModalize = forwardRef<any, IBottomPopupModalizeProps>(
  (props: IBottomPopupModalizeProps, ref) => {
    const {children, modalizeProps, modalHeight = DIMENSION.height - 60} = props
    return (
      <Portal>
        <Modalize
          adjustToContentHeight
          childrenStyle={{height: modalHeight}}
          ref={ref}
          {...modalizeProps}>
          <View>{children}</View>
        </Modalize>
      </Portal>
    )
  }
)

export default BottomPopupModalize
