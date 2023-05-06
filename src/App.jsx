import Header from './components/Header'
import ShoppingList from './components/ShoppingList'
import { useState } from 'react'

function App() {
  const [lists, setLists] = useState({
    list1: ['Item 1', 'Item 2', 'Item 3'],
    list2: ['Item 4', 'Item 5'],
    list3: ['Item 6'],
  })

  return (
    <>
      <Header />
      <div className="grid grid-cols-3 gap-10 mt-16 mx-60">
        <ShoppingList
          listName={'List 1'}
          items={['Item 1', 'Item 2', 'Item 3']}
        />
        <ShoppingList listName={'List 2'} items={['Item 4', 'Item 5']} />
        <ShoppingList listName={'List 3'} items={['Item 6']} />
      </div>
    </>
  )
}

export default App

// -- THINGS TO ADD:
// [X] Props: which ones do I need to pass down to ShoppingList.jsx?
