import AddItemForm from './AddItemForm'

function ShoppingList({ listName, items, onMoveItem, onAddItem, listId }) {
  const handleAddItem = (newItem) => {
    onAddItem(newItem, listId)
  }

  const handleMoveItem = (index, selectedListId) => {
    const itemToMove = items[index]
    onMoveItem(itemToMove, listId, selectedListId)
  }

  return (
    <div className="max-w-full justify-self-center w-full">
      <h3 className="font-mono font-bold text-xl text-center mb-4">
        {listName}
      </h3>
      <div className="bg-gray-300 shadow-lg rounded-lg px-4 py-6 h-full flex flex-col justify-between">
        <ul className="divide-y divide-gray-300 flex-grow">
          {items.map((item, index) => (
            <li
              key={item.id}
              className="flex items-center rounded-md bg-white mb-4 px-3 py-2"
            >
              <p className="font-mono text-sm text-gray-900">{item.name}</p>
              <div className="ml-4">
                <select onChange={(e) => handleMoveItem(index, e.target.value)}>
                  <option>Select list</option>
                  {['List 1', 'List 2', 'List 3'].map((listName) => (
                    <option key={listName} value={`list${listName.charAt(5)}`}>
                      {listName}
                    </option>
                  ))}
                </select>
              </div>
            </li>
          ))}
        </ul>
        <div className="self-start w-full">
          <AddItemForm onAddItem={handleAddItem} className="mt-4" />
        </div>
      </div>
    </div>
  )
}

export default ShoppingList

// -- THINGS TO ADD:
// [X] Props: which ones do I need to get from App.jsx?
// [X] Investigate how to handle moving items between lists (Redux? or npm package?)
// [X] Move shopping list <h3> outside of gray div
// [X] Add styling to each list items (see Figma)
// [X] Add space between items and forms
// [X] Add fixed height to list
