import { useSelector, useDispatch } from "react-redux";
import { increment } from "../store/counter/counterSlice.js";

function About(){
    const count = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch()
    return(
        <>
        <h1>I am About</h1>
        <p>Count: {count}</p>
        <button onClick={()=> dispatch(increment())}>Increament</button>
        
        </>
    )

}

export default About;