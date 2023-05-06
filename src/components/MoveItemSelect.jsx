import React from 'react'

function MoveItemSelect({ options, onChange }) {
  return (
    <select onChange={onChange}>
      <option>Select list</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default MoveItemSelect
