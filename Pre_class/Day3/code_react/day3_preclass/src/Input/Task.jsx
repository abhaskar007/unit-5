import React  from "react";

function Task(){
    const [query, setQuery] = React.useState("");
    const [tasks,setTasks] = React.useState([]);
    const handleChange = (e) => {
        const {value } = e.target;
        setQuery(value);
    };
    const handleAdd = () => {
        const payload = {
            title: query,
            status: false
        };
        let newTasks = [...tasks,payload];
        setTasks(newTasks);
    };
    return(
        <div>
            <h1>Task</h1>
            <div>
                <input value={query}
            onChange = {handleChange}placeholder="add something"/>
            <button onClick={handleAdd}>ADD</button>
            </div>
            <div>
                {tasks.map((item) => {
                    return <div>{item.title}</div>
                })}
            </div>
        </div>
    );
}
export default Task