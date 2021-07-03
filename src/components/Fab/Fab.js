import "./Fab.css";

// component be more reusable in the future, leave as is for now
const Fab = ({handleClick}) => {
    return (
        <button onClick={handleClick} className="fab">
            <img className="add-img" src="/add.svg" alt="add new icon"/>
            <span className="screenreader">Add</span>
        </button>
    )
}

export default Fab;