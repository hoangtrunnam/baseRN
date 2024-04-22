// prevent users enable large fontsize in the system setting
import {Text, TextStyle} from 'react-native'

interface TextWithDefaultProps extends Text {
  defaultProps?: {allowFontScaling?: boolean; style?: TextStyle}
}

const TextElement = Text as unknown as TextWithDefaultProps

TextElement.defaultProps = TextElement.defaultProps || {}
TextElement.defaultProps!.allowFontScaling = false
