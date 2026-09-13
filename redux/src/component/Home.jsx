import { useSelector, useDispatch } from "react-redux";
import { decrement } from "../store/counter/counterSlice.js";
useSelector

function Home(){
      const count = useSelector((state)=> state.counter.value)
      const dispatch = useDispatch()
    return(
        <>
        <h1>I am Home</h1>
        <p>count: {count}</p>
        <button onClick={()=> dispatch(decrement())}>Decreament</button>
        
        </>
    )
}

export default Home;