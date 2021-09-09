import { Component } from "react";


class Friends extends Component {

    render(){

    const friendItems = this.props.allFriends.map((friend, index) => {
        return <li key = {index}>{friend.name} - {friend.age}</li>
    })

    return (
        <ul>
            {friendItems}
        </ul>
    )
}

}
export default Friends