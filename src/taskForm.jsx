import { useState } from "react";

const TaskForm = ({onAdd}) => {
    const [taskName, setTaskName] = useState(' ');
    
    const handleSubmit = (event) => {
            event.preventDefault();
            onAdd(taskName);
    }
    return (
    <>
    <form onSubmit = {handleSubmit}>
        <button>+</button>
        <input type="text" 
        value ={taskName}
        onChange= {event => setTaskName(event.target.value)}
        placeholder="Write your task..."/>
    </form>
    </>
    );
}

export default TaskForm;