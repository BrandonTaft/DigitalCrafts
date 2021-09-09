import { Component } from "react";


class TaskList extends Component {

    

    render() {

        const taskItems = this.props.allTasks.map((task, index) => {
            return <li key={index}>{task.name} - {task.priority}</li>
        })

        return (
            <ul>
                {taskItems}
            </ul>
        )
    }

}
export default TaskList