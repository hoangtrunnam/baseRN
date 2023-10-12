import React, {createContext, useState, useContext, ReactNode} from 'react'

interface LanguageContextType {
  language: string
  setLanguage: (language: string) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({children}) => {
  const [language, setLanguage] = useState<string>('en') // Default is 'en'

  return (
    <LanguageContext.Provider value={{language, setLanguage}}>{children}</LanguageContext.Provider>
  )
}
