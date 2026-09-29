import { Route, Routes } from 'react-router'
import './App.css'
import Header from './components/Header.jsx'
import About from './pages/About.jsx'
import Catalog from './pages/Catalog.jsx'
import Contacts from './pages/Contacts.jsx'
import Home from './pages/Home.jsx'
import News from './pages/News.jsx'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  )
}

export default App
