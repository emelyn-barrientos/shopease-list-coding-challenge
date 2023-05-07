import React from 'react'

function MoveItemSelect({ options, onChange }) {
  return (
    <select
      onChange={onChange}
      className="block w-full bg-white border border-gray-300 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    >
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
