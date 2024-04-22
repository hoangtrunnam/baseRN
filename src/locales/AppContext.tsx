import React, {createContext, useState, useContext, ReactNode} from 'react'
import i18n from 'src/locales/i18n'

export type IColorApp = Record<string, string>

interface AppContextType {
  language: string
  setLanguage: (language: string) => void
  setTheme: (theme: keyof typeof DefaultColor) => void
  colors: IColorApp
}

export const DefaultColor: {
  dark: IColorApp
  light: IColorApp
  default: IColorApp
} = {
  dark: {},
  light: {},
  default: {},
}

const AppContext = createContext<AppContextType>({
  language: '',
  setLanguage: () => {},
  setTheme: () => {},
  colors: DefaultColor.default,
})

export const useLanguage = (): AppContextType => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const useColors: <T extends IColorApp>() => T = () => {
  const {colors: color} = React.useContext(AppContext)
  return color as any
}

interface AppProviderProps {
  children: ReactNode
  colors: {
    dark: IColorApp
    light: IColorApp
    default: IColorApp
  }
}

export const useTheme = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useTheme must be used within a LanguageProvider')
  }
  return context.setTheme
}

export const AppProvider: React.FC<AppProviderProps> = ({children, colors}) => {
  const [language, setLanguage] = useState<string>('en') // Default is 'en' and get it from storage
  i18n.locale = language
  const [currentTheme, setCurrentTheme] = useState<keyof typeof DefaultColor>('dark') // save current theme, get from storage
  const [color, setColor] = useState<IColorApp>(colors[currentTheme])

  // Hàm để đổi theme
  const setTheme = (theme: keyof typeof DefaultColor) => {
    setCurrentTheme(theme)
    setColor(colors[theme])
  }

  return (
    <AppContext.Provider value={{language, setLanguage, colors: color, setTheme}}>
      {children}
    </AppContext.Provider>
  )
}
