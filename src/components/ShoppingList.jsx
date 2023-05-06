import AddItemForm from './AddItemForm'
import { useState } from 'react'

function ShoppingList({ listName, items }) {
  const [itemsState, setItemsState] = useState(items)

  const handleAddItem = (newItem) => {
    setItemsState([...itemsState, newItem])
  }

  return (
    <div className="max-w-full justify-self-center w-full">
      <h3 className="font-mono font-bold text-xl text-center mb-4">
        {listName}
      </h3>
      <div className="bg-gray-300 shadow-lg rounded-lg px-4 py-6 h-full flex flex-col justify-between">
        <ul className="divide-y divide-gray-300 flex-grow">
          {itemsState.map((item, index) => (
            <li
              key={index}
              className="flex items-center rounded-md bg-white mb-4 px-3 py-2"
            >
              <p className="font-mono text-sm text-gray-900">{item}</p>
            </li>
          ))}
        </ul>
        <div className="self-start">
          <AddItemForm onAddItem={handleAddItem} className="mt-4" />
        </div>
      </div>
    </div>
  )
}

export default ShoppingList

// -- THINGS TO ADD:
// [X] Props: which ones do I need to get from App.jsx?
// [] Investigate how to handle moving items between lists (Redux?)
// [X] Move shopping list <h3> outside of gray div
// [X] Add styling to each list items (see Figma)
// [X] Add space between items and forms
// [] Add fixed height to list
