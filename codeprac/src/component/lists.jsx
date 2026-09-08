
function Lists({props}){
    
    return(
        <div>{props.map((prop)=>{
           return <li key={prop.toString()}>{prop}</li>
        })}</div>
    )
}

export default Lists;