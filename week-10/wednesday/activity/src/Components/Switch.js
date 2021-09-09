import { Component } from "react";


class Switch extends Component {

    constructor() {
        super()

        this.state = {
            isOn: false
        }
    }

    handleSwitchClick = () => {
        this.setState({
            isOn: !this.state.isOn
        })
    }

    render() {
        return (
            <button onClick={this.handleSwitchClick}>

                {this.state.isOn ? "ON" : "OFF"}

            </button>
        )
    }

}

export default Switch