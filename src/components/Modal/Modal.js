import { useEffect, useState } from "react";
import "./Modal.css"
const Modal = ({active, toggle, onSubmit, initialValues}) => {
    const [title, setTitle] = useState("")

    const [desc, setDesc] = useState("")

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleDescChange = (e) => {
        setDesc(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit({title, description: desc})
    }

    useEffect(() => {
        if(initialValues) {
            setTitle(initialValues.title)
            setDesc(initialValues.description)
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
                            value={desc}
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