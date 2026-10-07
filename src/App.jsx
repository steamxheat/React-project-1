import { Route, Routes } from 'react-router'
import { useContext } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import ThemeSwitcher from './components/ThemeSwitcher.jsx'
import { ThemeContext } from './context/ThemeContext.js'
import About from './pages/About.jsx'
import Catalog from './pages/Catalog.jsx'
import Contacts from './pages/Contacts.jsx'
import Home from './pages/Home.jsx'
import News from './pages/News.jsx'

function App() {
  const { colors } = useContext(ThemeContext)

  return (
    <div style={{ background: colors.bg, color: colors.main, minHeight: '100vh' }}>
      <Header />
      <div className="theme-button">
        <ThemeSwitcher />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  )
}

export default App
