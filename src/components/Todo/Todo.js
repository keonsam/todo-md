import { useState } from "react";
import "./Todo.css"

const Todo = ({data, handleEdit, handleDelete, handleComplete}) => {
    const {id, title, description} = data;
    const [ show, setShow ] = useState(false)

    const toggleCard = () => {
        setShow(!show)
    }

    return (
        <li className="card">
            <div className="card-heading">
                <button onClick={() => handleEdit(data)} className="card-heading-btn">
                    <span className="screenreader">Edit</span>
                    <img className="card-heading-icons" src="/pencil.svg" alt=""/> 
                </button>
                <button onClick={() => handleComplete(data)} className="card-heading-btn">
                    <span className="screenreader">Complete</span>
                    <img className="card-heading-icons" src="/check.svg" alt=""/> 
                </button>
                <button onClick={() => handleDelete(id)} className="card-heading-btn">
                    <span className="screenreader">Delete</span>
                    <img className="card-heading-icons" src="/delete.svg" alt=""/> 
                </button>
            </div>
            <h3 className="card-title">{ title }</h3>
            <div className="card-body">
                <p data-testid="description" className={`card-description ${show ? "expand": ""}`}>
                    { description }
                </p>
                <button className="card-toggle" onClick={toggleCard}>
                    <span className="screenreader">Toggle Description</span>
                </button>
            </div>
        </li>
    )
}

export default Todo;