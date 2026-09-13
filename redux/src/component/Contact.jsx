import { useDispatch, useSelector } from "react-redux";
import { incrementByAmount } from "../store/counter/counterSlice.js";

useSelector
function Contact(){
      const count = useSelector((state)=> state.counter.value)
      const dispatch = useDispatch()

    return(
        <>
        <h1>I am Contact</h1>
        <p>Count: {count}</p>
        <button onClick={()=> dispatch(incrementByAmount(5))}>IncreamentBy5</button>
        
        </>
    )
}

export default Contact;