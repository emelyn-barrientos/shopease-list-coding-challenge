function ShoppingList() {
  return (
    <div className="bg-white shadow-lg rounded-lg px-4 py-6">
      <h3 className="font-mono font-bold text-xl text-center mb-4">
        Shopping List
      </h3>
      <ul className="divide-y divide-gray-300">
        <li className="flex items-center py-2">
          <p className="font-mono text-gray-900 text-lg">Item 1</p>
        </li>
        <li className="flex items-center py-2">
          <p className="font-mono text-gray-900 text-lg">Item 2</p>
        </li>
        <li className="flex items-center py-2">
          <p className="font-mono text-gray-900 text-lg">Item 3</p>
        </li>
      </ul>
    </div>
  )
}

export default ShoppingList
