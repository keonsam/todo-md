import TodoList from "./TodoList";
import { render, screen, fireEvent } from '@testing-library/react';

global.alert = jest.fn()

describe("Todo List", () => {
    it("should create Todo List", () => {
        render(<TodoList />)
        const todoList = screen.getByRole('list');
        expect(todoList).toBeInTheDocument();
    })
})