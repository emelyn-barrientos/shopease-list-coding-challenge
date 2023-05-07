import React from 'react'

function MoveItemSelect({ options, onChange }) {
  return (
    <select
      onChange={onChange}
      className="block w-full bg-white border border-gray-300 font-mono text-xs py-1 px-1 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    >
      <option>Move Item</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default MoveItemSelect
