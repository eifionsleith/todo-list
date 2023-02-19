import React from 'react';
import trashIcon from '../img/trash.svg';

export default function TodoTask({taskText, onDelete}) {
    const handleDelete = () => {
        if (onDelete) {
            onDelete();
        }
    };

    return (
        <div className={'task--wrapper'}>
            <p>{taskText}</p>
            <span onClick={handleDelete} className={'task--trash-wrapper'}>
                <img className={'task--trash-img'} src={trashIcon} />
            </span>
        </div>
    );
};