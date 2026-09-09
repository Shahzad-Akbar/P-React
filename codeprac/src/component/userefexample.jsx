import { useEffect, useRef, useState } from "react";

function UseRefExample(){
    const [count, setCount] = useState(0)
    const refCount = useRef(0); //it will persist value across rerender
    const inputRef = useRef();
    const btnRef = useRef();
    const btnRef2 = useRef();
    // useEffect(()=>{
    //     console.log(`Rerendring... so value will update ${refCount.current}`)
    //     refCount.current = refCount.current + 1;
    // })

    function handleRefCount(){
        refCount.current = refCount.current +1; 
    }
    function handleInput(){
        refCount.current = inputRef.current.value;
        inputRef.current.focus();       
        btnRef2.current.style.background ='red';
        btnRef2.current.textContent ="Cliked"

    }
    
    

    return(<>
    <h1>From useRef Example</h1>
    <button onClick={()=>{setCount(count+1)}}>Count:{count}</button>
    <p>Value: {refCount.current}</p>
    <button ref={btnRef} onClick={handleRefCount}>RefCount</button><br />
    <input ref={inputRef} type="text" />
    <button ref={btnRef2} onClick={handleInput}>Click</button>
    <p>Now refCount value can be changed by clicking refCount button or Giving Input</p>
    </>)


}

export default UseRefExample;