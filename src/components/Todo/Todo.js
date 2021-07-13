const Todo = ({data, handleEdit, handleDelete, handleComplete}) => {
    const {id, title, description} = data;
    return (
        <li>
            <div>
                <button onClick={() => handleEdit(id)}>
                    <span className="screenreader">Edit</span>
                </button>
                <button onClick={() => handleComplete(id)}>
                    <span className="screenreader">Complete</span>
                </button>
                <button onClick={() => handleDelete(id)}>
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