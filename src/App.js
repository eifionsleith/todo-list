import React from "react";
import './styles.css';

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
    const [tasks, setTasks] = React.useState([]);

    return (
        <main>
            <TodoForm tasks={tasks} setTasks={setTasks}/>
            <TodoList tasks={tasks} setTasks={setTasks}/>
        </main>
    );
};
