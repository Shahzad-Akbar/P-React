import { useRef, useState } from "react"
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const refValue = useRef(0);

  const handleCountIn = () => {
    setCount(count + 1);
  }
  const handleCountDe = () => {
    setCount(count - 1);
  }
  const handleRefIn = () => {
    refValue.current += 1;
  }
  const handleRefDe = () => {
    refValue.current -= 1;
  }

  return (
    <>
      <div className="container">
        <div className="card">
          <h1>useState and useRef hook counter</h1>
          <div className="state">
            <div className="usestate">
              <h3>useStat Hook</h3>
              <div className="btn1">
                <button onClick={handleCountIn}>Increament</button>
                <p>{count}</p>
                <button onClick={handleCountDe}>Decreament</button>
              </div>
            </div>
            <div className="useref">
              <h3>useRef Hook</h3>
              <div className="btn2">
                <button onClick={handleRefIn}>Increament</button>
                <p>{refValue.current}</p>
                <button onClick={handleRefDe}>Decreament</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
