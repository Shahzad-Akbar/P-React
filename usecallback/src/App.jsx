import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h3 className='haeding'>product selector</h3>
      <div className='tags'>
        <div className='topics'>
          <p className='p'>Home</p>
          <p className='p'>About</p>
          <p className='p'>product</p>
        </div>
        <div className='search'>
          <input type="text" className='input' placeholder='serch here...' />
          <button className='button'>
      <FontAwesomeIcon icon={faSearch} />
    </button>
        </div>

      </div>
    </>
  )
}

export default App
