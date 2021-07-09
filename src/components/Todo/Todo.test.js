import Todo from "./Todo";
import { render, screen, fireEvent } from '@testing-library/react';

global.alert = jest.fn()

const todoData = {
    title: "clean the garage",
    description: "tidy the garage by 6:00 pm"
}

const handleEdit = jest.fn((e) => {
    console.log("handleEdit test")
    e.preventDefault()
    return;
})

const handleComplete = jest.fn((e) => {
    console.log("handleComplete test")
    e.preventDefault()
    return;
})

const handleDelete = jest.fn((e) => {
    console.log("handleDelete test")
    e.preventDefault()
    return;
})

const props = {
    index: 0,
    handleEdit,
    handleComplete,
    handleDelete,
    ...todoData
}

describe("Todo", () => {
    it("should create Todo", () => {
        render(<Todo { ...props } />)
        const todo = screen.getByRole('listitem');
        expect(todo).toBeInTheDocument();
    })

    it("should render input data", () => {
        render(<Todo { ...props } />)
        const todo = screen.getByRole('listitem');
        expect(todo).toBeInTheDocument();
        const heading = screen.getByRole('heading');
        expect(heading).toHaveTextContent(todoData.title);
        const desc = screen.getByTestId('description')
        expect(desc).toHaveTextContent(todoData.description);
    })

    it("should tigger button handlers", () => {
        render(<Todo { ...props } />)
        const todo = screen.getByRole('listitem');
        expect(todo).toBeInTheDocument();
        const editBtn = screen.getByRole("button", { name: /Edit/i });
        fireEvent.click(editBtn);
        const completeBtn = screen.getByRole("button", { name: /Complete/i });
        fireEvent.click(completeBtn);
        const deleteBtn = screen.getByRole("button", { name: /Delete/i });
        fireEvent.click(deleteBtn);
        expect(handleEdit).toHaveBeenCalledTimes(1)
        expect(handleComplete).toHaveBeenCalledTimes(1)
        expect(handleDelete).toHaveBeenCalledTimes(1)
    })
})