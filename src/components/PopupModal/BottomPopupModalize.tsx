import React, {forwardRef, ReactNode} from 'react'
import {View} from 'react-native'
import {Modalize, ModalizeProps} from 'react-native-modalize'
import {Portal} from 'react-native-portalize'

interface IBottomPopupModalizeProps {
  children: ReactNode
  modalizeProps: ModalizeProps
}

const BottomPopupModalize = forwardRef<any, IBottomPopupModalizeProps>(
  (props: IBottomPopupModalizeProps, ref) => {
    const {children, modalizeProps} = props
    return (
      <Portal>
        <Modalize ref={ref} {...modalizeProps}>
          <View>{children}</View>
        </Modalize>
      </Portal>
    )
  }
)

export default BottomPopupModalize
