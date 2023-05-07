import { useState } from 'react'

function AddItemForm(props) {
  const [newItem, setNewItem] = useState('')
  const [lastId, setLastId] = useState(6)

  const handleNewItemChange = (e) => {
    setNewItem(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newItemWithId = {
      id: lastId + 1,
      name: newItem,
    }
    props.onAddItem(newItemWithId)
    setLastId(lastId + 1)
    setNewItem('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex justify-between mt-40">
      <div className="flex w-full">
        <input
          type="text"
          value={newItem}
          onChange={handleNewItemChange}
          className="w-full font-mono rounded-md border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 mr-4"
          required
        />
        <button
          type="submit"
          className="bg-white hover:bg-blue-600 text-gray-900 hover:text-white font-mono text-md rounded-md px-4 py-2"
        >
          ADD
        </button>
      </div>
    </form>
  )
}

export default AddItemForm

// -- THINGS TO ADD:
// [X] Must require text input to form to submit
// [X] Make width of form same width as list items
