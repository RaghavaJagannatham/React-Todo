import React from 'react';
import { TodoItem } from './TodoItem';
import './Todos.css';

function Todos( props ) {
    return (
     
        <div className="container">
            <h2>This is Todo Component</h2>
            {props.todos.map((todo) => {
                return <TodoItem todo={todo}  onDelete={props.onDelete}/>
                
            })}
            
                   
        </div>
    )
}

export default Todos
