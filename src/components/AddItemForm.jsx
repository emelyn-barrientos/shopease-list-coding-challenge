import { useState } from 'react'

function AddItemForm() {
  const [newItem, setNewItem] = useState('')

  const handleNewItemChange = (e) => {
    setNewItem(e.target.value)
  }
  return (
    <form>
      <input type="text" value={newItem} onChange={handleNewItemChange} />
    </form>
  )
}

export default AddItemForm
