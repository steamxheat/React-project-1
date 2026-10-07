import { createContext } from 'react'

export const themes = {
  light: {
    bg: '#ffffff',
    main: '#000000',
  },
  dark: {
    bg: '#222222',
    main: '#ffffff',
  },
}

export const ThemeContext = createContext({
  theme: 'light',
  setTheme: () => {},
  colors: themes.light,
})
