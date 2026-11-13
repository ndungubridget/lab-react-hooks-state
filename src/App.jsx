
import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // Manage dark mode
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Manage shopping cart
  const [cart, setCart] = useState([])

  // Manage selected category
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Toggle between light and dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  // Add products to cart
  const addToCart = (product) => {
    setCart([...cart, product])
  }

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <header>
        <h1>🛒 Shopping App</h1>
        <p>
          Welcome! Your task is to implement filtering, cart management, and dark
          mode.
        </p>

        <DarkModeToggle
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </header>

      <aside>
        <label htmlFor="category-filter">Filter by Category: </label>

        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
        >
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </aside>

      <main>
        <ProductList
          selectedCategory={selectedCategory}
          addToCart={addToCart}
        />

        <Cart cartItems={cart} />
      </main>
    </div>
  )
}

export default App
