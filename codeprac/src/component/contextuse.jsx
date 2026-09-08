import { useContext } from "react";
import MyContext from "./contextcreate.jsx";


function ContextUser(){
    const {user} = useContext(MyContext);
    
    return(<>
    <h2>From UseContext</h2>
    <div>Name: {user.name}</div> 
    <div>Name: {user.age}</div>   
    </>)
}

export default ContextUser;