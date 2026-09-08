import { useReducer } from "react";

function ReducerHook(){
    const initialstate = {count:0, name:'Akbar'};
    const [state, dispatch] = useReducer(reducer, initialstate);

    function reducer(state, action){
        switch (action.type){
            case 'increament':
                return {...state, count: state.count + 1};
            case 'decreament':
                return {...state, count: state.count - 1};
            case 'nameupdate':
                return {...state, name: action.payload};
            default:
                throw new Error();             
        }
    }

    return(
        <>
        <h1>From UseReducer</h1>
        <p>Count: {state.count}</p>
        <p>Name: {state.name}</p>
        <button onClick={()=> dispatch({type: 'increament'})}>Increase</button>
        <button onClick={()=> dispatch({type: 'decreament'})}>Decrease</button>
        <button onClick={()=> dispatch({type: 'nameupdate', payload:"Shahzad"})}>NameUpdate</button>
        </>
    )

}

export default ReducerHook;