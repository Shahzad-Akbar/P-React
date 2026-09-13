import { useState } from 'react'
import Dashboard from './conponent/Dashboard.jsx'
import withAuth from './conponent/withAuth.jsx'




function App() {
  const [count, setCount] = useState(0)
  const AuthComp = withAuth(Dashboard);

  return (
    <>
      <div>Hello HOC</div>
      <AuthComp/>

    </>
  )
}

export default App
