import { useState } from 'react'
import SearchBar from './component/search.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleClick =()=>{
    setCount(count + 1);
  }
  


  return (
    <>
    <button onClick={handleClick}>Click {count}</button>
    <SearchBar />
    
    </>
  )
}

export default App
