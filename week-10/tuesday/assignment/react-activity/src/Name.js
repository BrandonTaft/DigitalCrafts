import { Component } from "react";


class Name extends Component{
    render(){
        return (
            <div> {this.props.lastName} , {this.props.firstName}</div>
        )

    }


}
export default Name