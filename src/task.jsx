const Task = ({name, done}) => {
    return (
    <div className="taskContainer">
        <input type="checkbox" name="checkbox" id="checkbox" />
        <label htmlFor="checkbox">{name}</label>
    </div>   
    )
}

export default Task