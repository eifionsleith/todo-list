import React from 'react';

export default function TodoForm({tasks, setTasks}) {
    const [inputValue, setInputValue] = React.useState('');

    const handleAddTask = () => {
        if (inputValue.trim() === '')
            return;

        setTasks([...tasks, inputValue]);
        setInputValue('');
    }

    return (
        <div className={'form--wrapper'}>
            <input value={inputValue} onChange={(event) => setInputValue(event.target.value)}/>
            <button onClick={handleAddTask}>ADD</button>
        </div>
    );
};