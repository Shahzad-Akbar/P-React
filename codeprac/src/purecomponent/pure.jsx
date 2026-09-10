import React from "react";
import Child from "./purecomponent.jsx";

class Parent extends React.Component{
    state ={count:0};
    render(){
        console.log("parent rerender")
        return(
            <>
            <h1>I am from parent component of pure component</h1>
            <Child count={this.state.count}/>
            </>
    )
    }
}

export default Parent;