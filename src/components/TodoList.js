import React from 'react';
import TodoTask from "./TodoTask";

export default function TodoList({tasks, setTasks}) {

    const tasksRender = tasks.map((task, index) => {
        return (<TodoTask taskText={task} onDelete={() => handleDeleteTask(index)} />)
    });

    const handleDeleteTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return (
        <div className={'list--wrapper'}>
            {tasksRender}
        </div>
    );
};