import { Link } from 'react-router'

function Header() {
  return (
    <header>
      <h2>React Store</h2>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/catalog">Каталог</Link>
        <Link to="/news">Новости</Link>
        <Link to="/about">О нас</Link>
        <Link to="/contacts">Контакты</Link>
      </nav>
    </header>
  )
}

export default Header
