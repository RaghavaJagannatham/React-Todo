import React from 'react';
import './Addtodo.css';

function Addtodo() {
    return (
        <div className="Add-to-comp">
            <form className="Add-form">
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Title of Todo</label>
                    <input type="textarea" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Title"></input>
                    
                </div>

                <div className="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Description</label>
                    <input type="textarea" className="form-control" id="exampleInputPassword1" placeholder="Description" />
                </div>

                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">All are Right</label>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
    )
}

export default Addtodo
