import Header from './components/Header'
import ShoppingList from './components/ShoppingList'

function App() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-3 gap-10 mt-16 mx-60">
        <ShoppingList />
        <ShoppingList />
        <ShoppingList />
      </div>
    </>
  )
}

export default App

// -- THINGS TO ADD:
// [] Props: which ones do I need to pass down to ShoppingList.jsx?
