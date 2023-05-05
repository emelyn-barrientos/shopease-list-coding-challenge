import Header from './components/Header'
import ShoppingList from './components/ShoppingList'

function App() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-3 gap-4 justify-center">
        <ShoppingList />
        <ShoppingList />
        <ShoppingList />
      </div>
    </>
  )
}

export default App
