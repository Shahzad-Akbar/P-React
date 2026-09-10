import { PureComponent } from "react";

class Child extends PureComponent{
    render(){
        console.log("Rerendered");

        return(<>
            <h3>I am from child pure component</h3>
            <div>{this.props.count}</div>
        </>
        )

    }
}

export default Child;