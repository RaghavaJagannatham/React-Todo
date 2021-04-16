import React from 'react';
import './TodoItem.css';

export const TodoItem = ( {todo, onDelete} ) => {
    return ( 
        <div className="content">

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{todo.title}</h5>
                    <p className="card-text">{ todo.desc }</p>
                    <button type="button" class="btn btn-danger" onClick={ () => { onDelete(todo)}}>Delete</button>
                    
                </div>
           </div>
        </div>
    )
}