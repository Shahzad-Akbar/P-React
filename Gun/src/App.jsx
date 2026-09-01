import { useCallback, useMemo, useRef, useState } from 'react'
import './App.css'

const ourDebounce = (fn, delay) =>{
  let timer;
  return (...args) =>{
    clearTimeout(timer);
    timer = setTimeout(()=>{
      fn(...args);      
    }, delay);
  }
}

const ourThrottle = (fn, delay) =>{
  let timer;
  return (...args) => {
    if(!timer){
      fn(...args);
      timer = setTimeout(()=>{
        timer = null;
      }, delay);
    }
  }
}

function App() {
  const [normalState, setNormalState] = useState(0);
  const [debouncedInput, setDebouncedInput] = useState(0);
  // const [debouncedInputCalled, setDebouncedInputCalled] = useState(0);
  const debouncedInputCalled = useRef(0)
  // const [throttledInputCalled, setThrottledInputCalled] = useState(0);
  const throttledInputCalled = useRef(0)

  const [throttledInput, setThrottledInput] = useState(0);


  const handleChangeDebounced = () => {
    //console.log(e.target.value);
    setDebouncedInput(debouncedInputCalled.current);
  }
  const handleChangeThrottle = ()=>{
    //console.log(e.target.value);
    setThrottledInput(throttledInputCalled.current);
  }

  const debouncedChange = useCallback(ourDebounce(handleChangeDebounced, 300),[]);
  const throttledChange = useCallback(ourThrottle(handleChangeThrottle, 1000),[]);

  // const debouncedChange = useMemo(()=> ourDebounce(handleChangeDebounced, 300),[]);
  // const throttledChange = useMemo(()=> ourDebounce(handleChangeThrottle, 1000),[]);

  const handleNormalClick = () =>{
    setNormalState(prev => prev + 1);
  }

  const handleDebounceCount = () =>{
    debouncedInputCalled.current = debouncedInputCalled.current + 1;
  }

  const handleThrottledCount = () =>{
    throttledInputCalled.current = throttledInputCalled.current + 1;
  }



  return (
    <>
    {/* <input type="text" onChange={debouncedChange} />
    <input type="text" onChange={throttledChange} />
    <div>Debounced: {debouncedInput}</div>
    <div>Throttled: {throttledInput}</div> */}
      
      <div className='container'>
        <div onClick={handleNormalClick} className='normal-gun gun'></div>
        <div className='bullet'></div>
        <span className='count'>{normalState}</span>
      </div>


      <div className='container'>
        <div onClick= {() => {handleDebounceCount(); debouncedChange();}} className='debounced-gun gun'></div>
        <div className='bullet'></div>
        <span className='count'>{debouncedInput}</span>
      </div>


      <div className='container'>
        <div onClick={()=>{handleThrottledCount(); throttledChange();}} className='throttled-gun gun'></div>
        <div className='bullet'></div>
        <span className='count'>{throttledInput}</span>
      </div>
    </>
  )
}

export default App
