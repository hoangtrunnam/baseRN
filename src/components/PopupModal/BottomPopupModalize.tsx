import React, {forwardRef, type ReactNode} from 'react'
import {View} from 'react-native'
import {Modalize, type ModalizeProps} from 'react-native-modalize'
import {Portal} from 'react-native-portalize'
import {DIMENSION} from 'src/commons/dimension'

interface IBottomPopupModalizeProps {
  children: ReactNode
  modalizeProps: ModalizeProps
  modalHeight?: number
  adjustToContentHeight?: boolean
}

const BottomPopupModalize = forwardRef<any, IBottomPopupModalizeProps>(
  (props: IBottomPopupModalizeProps, ref) => {
    const {children, modalizeProps, modalHeight = DIMENSION.height - 100, adjustToContentHeight = false} = props
    return (
      <Portal>
        <Modalize
          adjustToContentHeight={adjustToContentHeight}
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
