import { useState } from 'react'

function AddItemForm(props) {
  const [newItem, setNewItem] = useState('')

  const handleNewItemChange = (e) => {
    setNewItem(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.onAddItem(newItem)
    setNewItem('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex justify-between">
      <div className="flex">
        <input
          type="text"
          value={newItem}
          onChange={handleNewItemChange}
          className="w-full rounded-md border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-white hover:bg-blue-600 text-gray-900 hover:text-white font-mono text-md rounded-md px-4 py-2"
        >
          GO
        </button>
      </div>
    </form>
  )
}

export default AddItemForm
