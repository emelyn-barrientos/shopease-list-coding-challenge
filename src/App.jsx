import Header from './components/Header'
import ShoppingList from './components/ShoppingList'
import { useState } from 'react'

function App() {
  const [lists, setLists] = useState(() => [
    {
      id: 1,
      name: 'List 1',
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
      ],
    },
    {
      id: 2,
      name: 'List 2',
      items: [
        { id: 4, name: 'Item 4' },
        { id: 5, name: 'Item 5' },
      ],
    },
    { id: 3, name: 'List 3', items: [{ id: 6, name: 'Item 6' }] },
  ])

  const handleMoveItem = (item, fromListId, toListId) => {
    const updatedLists = [...lists]
    const fromListIndex = updatedLists.findIndex(
      (list) => list.id === fromListId
    )
    const toListIndex = updatedLists.findIndex((list) => list.id === toListId)

    if (fromListIndex > -1 && toListIndex > -1) {
      const fromListItems = [...updatedLists[fromListIndex].items]
      const toListItems = [...updatedLists[toListIndex].items]
      const itemIndex = fromListItems.findIndex((i) => i.id === item.id)

      if (itemIndex > -1) {
        const removedItem = fromListItems.splice(itemIndex, 1)[0]
        toListItems.push(removedItem)

        updatedLists[fromListIndex].items = fromListItems
        updatedLists[toListIndex].items = toListItems

        setLists(updatedLists)
      }
    }
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
      <div className="grid grid-cols-3 gap-10 mt-16 mx-60">
        {lists.map((list) => (
          <ShoppingList
            key={list.id}
            listName={list.name}
            items={list.items}
            onMoveItem={handleMoveItem}
            onAddItem={handleAddItem}
            fromListId={list.id}
          />
        ))}
      </div>
    </>
  )
}

export default App

// -- THINGS TO ADD:
// [X] Props: which ones do I need to pass down to ShoppingList.jsx?
