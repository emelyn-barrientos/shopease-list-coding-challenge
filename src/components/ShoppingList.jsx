import AddItemForm from './AddItemForm'
import MoveItemSelect from './MoveItemSelect'

function ShoppingList({ listName, items, onMoveItem, onAddItem, listId }) {
  const handleAddItem = (newItem) => {
    onAddItem(newItem, listId)
  }

  const handleMoveItem = (index, selectedListId) => {
    const itemToMove = items[index]
    onMoveItem(itemToMove, listId, selectedListId)
  }

  const selectOptions = [
    { label: 'List 1', value: 'list1' },
    { label: 'List 2', value: 'list2' },
    { label: 'List 3', value: 'list3' },
  ]

  return (
    <div className="max-w-full justify-self-center w-full">
      <h3 className="font-mono font-bold text-xl text-center mb-4">
        {listName}
      </h3>
      <div className="bg-gray-300 shadow-lg rounded-lg px-4 py-4 h-full flex flex-col justify-between">
        <ul className="divide-y divide-gray-300 flex-grow">
          {items.map((item, index) => (
            <li
              key={item.id}
              className="flex items-center justify-between rounded-md bg-white mb-4 px-2 py-2"
            >
              <p className="font-mono text-sm text-gray-900">{item.name}</p>
              <div className="ml-auto">
                <MoveItemSelect
                  options={selectOptions}
                  onChange={(e) => handleMoveItem(index, e.target.value)}
                />
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
