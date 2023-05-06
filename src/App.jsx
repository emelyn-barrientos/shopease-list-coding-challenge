import Header from './components/Header'
import ShoppingList from './components/ShoppingList'
import { useState } from 'react'

function App() {
  const [lists, setLists] = useState({
    list1: ['Item 1', 'Item 2', 'Item 3'],
    list2: ['Item 4', 'Item 5'],
    list3: ['Item 6'],
  })

  const handleMoveItem = (item, fromList, toList) => {
    const fromListItems = [...lists[fromList]]
    const toListItems = [...lists[toList]]
    const index = fromListItems.indexOf(item)

    if (index > -1) {
      if (index > -1) {
        fromListItems.splice(index, 1)
        toListItems.push(item)
        setLists({
          ...lists,
          [fromList]: fromListItems,
          [toList]: toListItems,
        })
      }
    }
  }

  return (
    <>
      <Header />
      <div className="grid grid-cols-3 gap-10 mt-16 mx-60">
        <ShoppingList
          listName={'List 1'}
          items={lists.list1}
          onMoveItem={handleMoveItem}
          fromList="list1"
        />
        <ShoppingList
          listName={'List 2'}
          items={lists.list2}
          onMoveItem={handleMoveItem}
          fromList="list2"
        />
        <ShoppingList
          listName={'List 3'}
          items={lists.list3}
          onMoveItem={handleMoveItem}
          fromList="list3"
        />
      </div>
    </>
  )
}

export default App

// -- THINGS TO ADD:
// [X] Props: which ones do I need to pass down to ShoppingList.jsx?
