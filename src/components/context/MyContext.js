
import { View, Text } from 'react-native'
import React, { createContext, useState } from 'react'

export const ThemeContext = createContext(null);

export default function MyContext({children}) {
  const [theme, setTheme] = useState('light');
  const [isLogin, setIsLogin] = useState('light');

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}