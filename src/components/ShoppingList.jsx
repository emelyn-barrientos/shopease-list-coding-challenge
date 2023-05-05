import AddItemForm from './AddItemForm'
import { useState } from 'react'

function ShoppingList() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3'])

  const handleAddItem = (newItem) => {
    setItems([...items, newItem])
  }

  return (
    <div className="max-w-full justify-self-center w-full">
      <div className="bg-gray-300 shadow-lg rounded-lg px-4 py-6">
        <h3 className="font-mono font-bold text-xl text-center mb-4">
          Shopping List
        </h3>
        <ul className="divide-y divide-gray-300">
          {items.map((item, index) => (
            <li key={index} className="flex items-center py-2">
              <p className="font-mono text-gray-900 text-lg">{item}</p>
            </li>
          ))}
        </ul>
        <AddItemForm onAddItem={handleAddItem} />
      </div>
    </div>
  )
}

export default ShoppingList

// -- THINGS TO ADD:
// [] Props: which ones do I need to get from App.jsx?
// [] Investigate how to handle moving items between lists (Redux?)
// [] Move shopping list <h3> outside of gray div
// [] Add styling to each list itme (see Figma)
// [] Add height to list; add space between items and forms
