import { Link } from 'react-router'
import ProductCard from '../components/ProductCard.jsx'
import products from '../data/products.js'

function Home() {
  return (
    <main className="home">
      <section className="home-welcome">
        <h1>Добро пожаловать в React Store</h1>
        <p>Техника и аксессуары для дома, работы и отдыха</p>
        <Link className="catalog-link" to="/catalog">
          Перейти в каталог
        </Link>
      </section>

      <section>
        <h2>Популярные товары</h2>
        <div className="products">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="advantages">
        <h2>Почему выбирают нас</h2>
        <div>
          <p><strong>Гарантия</strong><br />На товары действует гарантия магазина.</p>
          <p><strong>Быстрая доставка</strong><br />Поможем быстро получить заказ.</p>
          <p><strong>Помощь консультанта</strong><br />Подскажем с выбором техники.</p>
        </div>
      </section>
    </main>
  )
}

export default Home
