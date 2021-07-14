import Fab from '../Fab/Fab';
import Modal from '../Modal/Modal';
import { useEffect, useState } from 'react';
import id from '../../utils/id';
import Todo from '../Todo/Todo';
import "./TodoList.css";

const TodoList = ({search}) => {
    const [show, setShow] = useState(false);
    const [initialValues, setInitialValues] = useState(undefined);

    const [list, setList] = useState([])

    const toggleModal = () => {
      setShow(!show)
    }

    const onNew = (data) => {
        data.id = id();
        data.status = "NEW";
        const newList = [...list, data];
        setList(newList);
        localStorage.setItem("todo-md", JSON.stringify(newList));
        setInitialValues(undefined);
        toggleModal()
    }

    const onEdit = (data) => {
        const index = list.findIndex(v => v.id === data.id);
        const newList = [...list]
        newList[index] = data;
        setList(newList);
        localStorage.setItem("todo-md", JSON.stringify(newList));
        setInitialValues(undefined);
        toggleModal()
    }

    const handleEdit = (todo) => {
        setInitialValues(todo)
        toggleModal()
    }

    const handleComplete = (todo) => {
        if (todo.status !== "NEW") {
            todo.status = "NEW";
        } else {
            todo.status = "COMPLETED";
        }
    }

    const handleDelete = (id) => {
        const newList = list.filter(v => v.id !== id);
        setList(newList);
        localStorage.setItem("todo-md", JSON.stringify(newList));
    }

    useEffect(() => {
        const todos = localStorage.getItem("todo-md");
        setList(JSON.parse(todos) || []);
    }, [])

    useEffect(() => {
    }, [search])

    return (
        <main className="body">
            <ul className="list">
                {
                    list.map((v) => <Todo data={v} key={v.id} handleEdit={handleEdit} handleComplete={handleComplete} handleDelete={handleDelete} />)
                }
            </ul>
            <div>
                <Fab handleClick={toggleModal} />
                <Modal active={show}  toggle={toggleModal} onNew={onNew} onEdit={onEdit} initialValues={initialValues} />
                <div className={`overlay ${show ? "show": ""}`} tabIndex="-1"></div>
            </div>
        </main>
    )
}

export default TodoList;