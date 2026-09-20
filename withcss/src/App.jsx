import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div>
          <h1>useState and useRef hook counter</h1>
          <div>
            <div>useState</div>
            <div>useRef</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
