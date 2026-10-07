import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext.js'

function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext)

  function changeTheme() {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return <button onClick={changeTheme}>Сменить тему</button>
}

export default ThemeSwitcher
