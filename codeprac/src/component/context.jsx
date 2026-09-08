import { useState } from 'react';
import MyContext from './contextcreate.jsx'

function ContextExample({children}){
    
    const [user, setUser] = useState({name: 'Shahzad', age:20})

    function handleAge(){
        setUser((prev)=>({
            ...prev,
            age: prev.age + 1
        }))        
    }

    return(
        <MyContext.Provider value={{user, handleAge}} >
            {children}
        </MyContext.Provider>
    )
}

export default ContextExample;

//If i need to use this value then i have to wrap conponent inside contextexample.
