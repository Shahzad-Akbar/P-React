import { lazy, Suspense, useState } from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
// import Home from './component/Home.jsx'
// import About from './component/About.jsx'
// import Contact from './component/Contact.jsx'
const Home = lazy(()=> import('./component/Home.jsx'));
const About = lazy(()=> import('./component/About.jsx'));
const Contact = lazy(()=> import('./component/Contact.jsx'));

import {multiply} from './store/counter/counterSlice.js';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  // const count = useSelector((state)=> state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
         <h1>I am redux</h1>
      {/* <button onClick={()=> dispatch(increment())}>Increament</button>
      <button onClick={()=> dispatch(decrement())}>Increament</button>
      <button onClick={()=> dispatch(incrementByAmount(5))}>IncreamentByAmount5</button> */}
      <button onClick={()=> dispatch(multiply())}>Multiply</button>
      <h1>For navigate</h1>
      <Link to='/'><button>Home</button></Link>
      <Link to='about'><button>About</button></Link>
      <Link to='contact'><button>contact</button></Link>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
