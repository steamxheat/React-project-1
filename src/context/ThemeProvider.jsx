import { useState } from 'react'
import { ThemeContext, themes } from './ThemeContext.js'

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext value={{ theme, setTheme, colors: themes[theme] }}>
      {children}
    </ThemeContext>
  )
}

export default ThemeProvider
