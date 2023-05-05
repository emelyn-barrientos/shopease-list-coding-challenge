import { useState } from 'react'

function AddItemForm() {
  const [itemName, setItemName] = useState('')
  return (
    <form>
      <input type="text" value={itemName} />
    </form>
  )
}

export default AddItemForm
