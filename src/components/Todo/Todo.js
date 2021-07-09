const Todo = ({index, title, description, handleEdit, handleDelete, handleComplete}) => {
    return (
        <li key={index}>
            <div>
                <button onClick={handleEdit}>
                    <span className="screenreader">Edit</span>
                </button>
                <button onClick={handleComplete}>
                    <span className="screenreader">Complete</span>
                </button>
                <button onClick={handleDelete}>
                    <span className="screenreader">Delete</span>
                </button>
            </div>
            <h3>{ title }</h3>
            <p data-testid="description">
                { description }
            </p>
        </li>
    )
}

export default Todo;