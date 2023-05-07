import Header from './components/Header'
import ShoppingList from './components/ShoppingList'
import { useState } from 'react'

function App() {
  const [lists, setLists] = useState(() => [
    {
      id: 'list1',
      name: 'List 1',
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
      ],
    },
    {
      id: 'list2',
      name: 'List 2',
      items: [
        { id: 4, name: 'Item 4' },
        { id: 5, name: 'Item 5' },
      ],
    },
    { id: 'list3', name: 'List 3', items: [{ id: 6, name: 'Item 6' }] },
  ])

  const handleMoveItem = (item, fromListId, toListId) => {
    setLists((prevLists) => {
      const updatedLists = prevLists.map((list) => {
        if (list.id === fromListId) {
          const items = list.items.filter((i) => i.id !== item.id)
          return { ...list, items }
        }
        if (list.id === toListId) {
          const items = [...list.items, item]
          return { ...list, items }
        }
        return list
      })
      return updatedLists
    })
  }

  const handleAddItem = (newItem, listId) => {
    setLists((prevLists) => {
      const listIndex = prevLists.findIndex((list) => list.id === listId)
      if (listIndex > -1) {
        const newList = [...prevLists[listIndex].items, newItem]
        const updatedLists = [...prevLists]
        updatedLists[listIndex] = { ...prevLists[listIndex], items: newList }
        return updatedLists
      }
      return prevLists
    })
  }

  return (
    <>
      <Header />
      <div className="max-w-screen-xl mx-auto">
        <div
          className="grid grid-cols-3 gap-10 mt-16 mx-40
       "
        >
          {lists.map((list) => (
            <ShoppingList
              key={list.id}
              listName={list.name}
              items={list.items}
              onMoveItem={handleMoveItem}
              onAddItem={handleAddItem}
              listId={list.id}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default App

// -- THINGS TO ADD:
// [X] Props: which ones do I need to pass down to ShoppingList.jsx?
