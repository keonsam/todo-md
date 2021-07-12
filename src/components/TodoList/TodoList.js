import Fab from '../Fab/Fab';
import Modal from '../Modal/Modal';
import { useEffect, useState } from 'react';
import id from '../../utils/id';
import Todo from '../Todo/Todo';

const TodoList = ({search}) => {
    const [show, setShow] = useState(false);

    const [list, setList] = useState([]) 
    const toggleModal = () => {
      setShow(!show)
    }

    const onSubmit = (e) => {
        e.id = id();
        e.status = "NEW";
        const newList = [...list, e];
        setList(newList);
        localStorage.setItem("todo-md", JSON.stringify(newList));
        toggleModal()
    }

    const handleEdit = (id) => {

    }

    const handleComplete = (id) => {
    }

    const handleDelete = (id) => {

    }

    useEffect(() => {
        const todos = localStorage.getItem("todo-md");
        setList(JSON.parse(todos) || []);
    }, [])

    useEffect(() => {
    }, [search])

    return (
        <main>
            <ul>
                {
                    list.map((v) => <Todo data={v} key={v.id} handleEdit={handleEdit} handleComplete={handleComplete} handleDelete={handleDelete} />)
                }
            </ul>
            <div>
                <Fab handleClick={toggleModal} />
                <Modal active={show}  toggle={toggleModal} onSubmit={onSubmit} />
                <div className={`overlay ${show ? "show": ""}`} tabIndex="-1"></div>
            </div>
        </main>
    )
}

export default TodoList;