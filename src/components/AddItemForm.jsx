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
      <input type="text" value={newItem} onChange={handleNewItemChange} />
      <button type="submit">Add Item</button>
    </form>
  )
}

export default AddItemForm
