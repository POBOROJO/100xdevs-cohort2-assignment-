
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from '../components/Cards'
import AddCard from './components/AddCard'

function App() {
  const [cards, setCards] = useState([]);

  return (
    <>
      <AddCard setCards={setCards}></AddCard> //* here setCards is being passed as a prop to the AddCard component
      <Cards setCards={setCards} cards={cards}></Cards>
      
    </>
  )
}

export default App
