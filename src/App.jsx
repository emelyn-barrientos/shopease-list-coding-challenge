import Header from './components/Header'
import ShoppingList from './components/ShoppingList'
import { useState } from 'react'

function App() {
  const [items, setItems] = useState([])
  return (
    <>
      <Header />
      <div className="grid grid-cols-3 gap-10 mt-16 mx-60">
        <ShoppingList items={items} />
        <ShoppingList items={items} />
        <ShoppingList items={items} />
      </div>
    </>
  )
}

export default App
