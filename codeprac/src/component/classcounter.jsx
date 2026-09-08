import { Component } from "react";

class Counter extends Component{
    // constructor(props){
    //     super(props);
    //     this.state ={
    //         count: 0
    //     }
    // }
    state = {
        count: 0
    }
    handleIncreament =()=>{
        this.setState({
            count: this.state.count + 1
        });
    };
    render(){
        return(
        <>
        <h3>Count : {this.state.count}</h3>
        <button onClick={this.handleIncreament}>Click</button>
        </>)
    }
}

export default Counter;