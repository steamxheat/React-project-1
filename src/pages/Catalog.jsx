import { useState } from 'react'
import ProductCard from '../components/ProductCard.jsx'
import products from '../data/products.js'

function Catalog() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Все')
  const [price, setPrice] = useState('Все')

  const categories = ['Все', 'Телефоны', 'Аудио', 'Гаджеты', 'Красота', 'Планшеты']
  const prices = ['Все', 'До 5000', 'До 15000', 'Дороже 15000']

  const filteredProducts = products.filter((product) => {
    const hasName = product.name.toLowerCase().includes(search.toLowerCase())
    const hasCategory = category === 'Все' || product.category === category
    const hasPrice =
      price === 'Все' ||
      (price === 'До 5000' && product.priceNumber <= 5000) ||
      (price === 'До 15000' && product.priceNumber <= 15000) ||
      (price === 'Дороже 15000' && product.priceNumber > 15000)

    return hasName && hasCategory && hasPrice
  })

  return (
    <main>
      <h1>Каталог</h1>
      <input
        className="search"
        placeholder="Поиск товара"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <div className="filters">
        {categories.map((item) => (
          <button
            className={category === item ? 'active' : ''}
            key={item}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="filters">
        {prices.map((item) => (
          <button className={price === item ? 'active' : ''} key={item} onClick={() => setPrice(item)}>
            {item}
          </button>
        ))}
      </div>

      <div className="products">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && <p>Товар не найден</p>}
    </main>
  )
}

export default Catalog
