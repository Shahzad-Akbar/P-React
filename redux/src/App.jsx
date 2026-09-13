import { lazy, Suspense, useState } from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
// import Home from './component/Home.jsx'
// import About from './component/About.jsx'
// import Contact from './component/Contact.jsx'
const Home = lazy(()=> import('./component/Home.jsx'));
const About = lazy(()=> import('./component/About.jsx'));
const Contact = lazy(()=> import('./component/Contact.jsx'));

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <h1>I am redux</h1>
      <Link to='/'><button>Home</button></Link>
      <Link to='about'><button>About</button></Link>
      <Link to='contact'><button>contact</button></Link>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
