import { useContext } from "react";
import MyContext from "./contextcreate";

function AgeUpdate(){
    const {handleAge} = useContext(MyContext);

    return(
        <button onClick={handleAge}>Click</button>
    )
}

export default AgeUpdate;