import { useEffect, useState } from "react";
import "./Modal.css"
const Modal = ({active, toggle, onNew, onEdit, initialValues}) => {
    const [title, setTitle] = useState("")

    const [description, setDescription] = useState("")

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleDescChange = (e) => {
        setDescription(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (initialValues) {
            const data = {...initialValues, title, description }
            onEdit(data)
        } else {
            onNew({title, description})
        }
    }

    useEffect(() => {
        if(initialValues) {
            setTitle(initialValues.title)
            setDescription(initialValues.description)
        } else {
            setTitle("")
            setDescription("")
        }
    }, [initialValues])

    return (
        <div
            className={`modal ${active ? "show": ""}`}
            data-testid="modal"
            role="dialog"
            aria-labelledby="dialog-title"
            aria-describedby="dialog with create to-do form"
            >
            <div className="modal-heading">
                <h2 className="modal-title" id="dialog-title">Create To-do</h2>
                <button className="modal-btn-close" onClick={toggle}>
                    <span className="screenreader">Close</span>
                    <img className="close-img" src="/close.svg" alt=""/>
                </button>
            </div>
            <form onSubmit={handleSubmit} className="dialog-form">
                <div className="dialog-form-body">
                    <div className="form-group">
                        <label className="form-label required" htmlFor="title">Title</label>
                        <input
                            className="form-control"
                            type="text"
                            id="title"
                            placeholder="Title"
                            value={title}
                            onChange={handleTitleChange}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="description">Description</label>
                        <textarea
                            className="form-control"
                            id="description"
                            placeholder="Description"
                            rows="3"
                            value={description}
                            onChange={handleDescChange}
                            ></textarea>
                    </div>
                </div>
                <div className="form-footer">
                    <button className="btn btn-secondary btn-left" onClick={toggle} type="button">Close</button>
                    <button className="btn btn-primary" disabled={!title} type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
};

export default Modal