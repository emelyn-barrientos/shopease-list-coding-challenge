import Header from './components/Header'
import ShoppingList from './components/ShoppingList'
import { useState } from 'react'

function App() {
  const [lists, setLists] = useState(() => [
    { name: 'List 1', items: ['Item 1', 'Item 2', 'Item 3'] },
    { name: 'List 2', items: ['Item 4', 'Item 5'] },
    { name: 'List 3', items: ['Item 6'] },
  ])

  const handleMoveItem = (item, fromList, toList) => {
    const fromListItems = [...lists[fromList]]
    const toListItems = [...lists[toList]]
    const index = fromListItems.indexOf(item)

    if (index > -1) {
      fromListItems.splice(index, 1)
      toListItems.push(item)

      setLists((prevLists) => ({
        ...prevLists,
        [fromList]: fromListItems,
        [toList]: toListItems,
      }))
    }
  }

  const handleAddItem = (newItem, listName) => {
    setLists((prevLists) => {
      const newList = [...prevLists[listName], newItem]
      return {
        ...prevLists,
        [listName]: newList,
      }
    })
  }

  return (
    <>
      <Header />
      <div className="grid grid-cols-3 gap-10 mt-16 mx-60">
        {lists.map((list, index) => (
          <ShoppingList
            key={index}
            listName={list.name}
            items={list.items}
            onMoveItem={handleMoveItem}
            onAddItem={handleAddItem}
            fromList={list.name.toLowerCase()}
          />
        ))}
      </div>
    </>
  )
}

export default App

// -- THINGS TO ADD:
// [X] Props: which ones do I need to pass down to ShoppingList.jsx?
