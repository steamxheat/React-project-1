import { Link, Route, Routes } from 'react-router'
import './App.css'
import airpodsImg from './assets/airpods.png'
import headphonesImg from './assets/headphones-real.png'
import iphoneAirImg from './assets/iphone-air.png'
import iphoneProImg from './assets/iphone-pro.png'
import samsungImg from './assets/samsung-s25.png'

const products = [
  { id: 1, name: 'iPhone 17 Pro', price: '139 990 руб.', image: iphoneProImg },
  { id: 2, name: 'iPhone Air', price: '119 990 руб.', image: iphoneAirImg },
  { id: 3, name: 'Samsung Galaxy S25 Ultra', price: '99 990 руб.', image: samsungImg },
  { id: 4, name: 'AirPods Pro', price: '24 990 руб.', image: airpodsImg },
  { id: 5, name: 'Marshall Major', price: '12 990 руб.', image: headphonesImg },
]

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

function Home() {
  return (
    <main>
      <h1>React Store</h1>
      <p>Телефоны, наушники, планшеты и аксессуары.</p>
    </main>
  )
}

function Catalog() {
  return (
    <main>
      <h1>Каталог</h1>
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

function News() {
  return (
    <main>
      <h1>Новости</h1>
      <p>Скоро появятся новые телефоны и аксессуары.</p>
    </main>
  )
}

function About() {
  return (
    <main>
      <h1>О нас</h1>
      <p>Небольшой магазин техники и аксессуаров.</p>
    </main>
  )
}

function Contacts() {
  return (
    <main>
      <h1>Контакты</h1>
      <p>Телефон: 77777777777</p>
    </main>
  )
}

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
