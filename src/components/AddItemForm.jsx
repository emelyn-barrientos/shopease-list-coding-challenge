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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newItem}
        onChange={handleNewItemChange}
        className="rounded-md"
      />
      <button type="submit" className="bg-white text-md rounded-md">
        GO
      </button>
    </form>
  )
}

export default AddItemForm
