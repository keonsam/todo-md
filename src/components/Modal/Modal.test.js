import Modal from "./Modal";
import { render, screen, fireEvent } from '@testing-library/react';

global.alert = jest.fn()

const onSubmit = (e) => {
    global.alert({action: "form submit", title: e.title, description: e.description})
}

const todo = {
    title: "take the trash out",
    description: "take the trash out by 6:00 am"
}

describe("Fab", () => {
    it("should create Modal", () => {
        render(<Modal />)
        const modal = screen.getByTestId('modal');
        expect(modal).toBeInTheDocument();
    })

    it("should be to create and submit modal form", () => {
        render(<Modal onSubmit={onSubmit}/>)
        const modal = screen.getByTestId("modal");
        expect(modal).toBeInTheDocument();
        const submit = screen.getByRole("button", { name: /Submit/i });
        fireEvent.click(submit);
        expect(global.alert).not.toHaveBeenCalled();
        const title = screen.getByLabelText(/Title/i);
        const description = screen.getByLabelText(/Description/i);
        fireEvent.change(title, { target: { value: "do the laundry"} });
        fireEvent.change(description, { target: { value: "done by 3:30pm before parant get home."} });
        fireEvent.click(submit);
        expect(global.alert).toHaveBeenCalledTimes(1)
        expect(global.alert).toHaveBeenCalledWith(
            expect.objectContaining({
                action: "form submit",
                title: "do the laundry",
                description: "done by 3:30pm before parant get home."
            })
        )
    })

    it("should be to edit and submit modal form", () => {
        render(<Modal onSubmit={onSubmit} initialValues={todo}/>)
        const modal = screen.getByTestId("modal");
        expect(modal).toBeInTheDocument();
        const submit = screen.getByRole("button", { name: /Submit/i });
        const title = screen.getByLabelText(/Title/i);
        const description = screen.getByLabelText(/Description/i);
        expect(title.value).toEqual(todo.title)
        expect(description.value).toEqual(todo.description)
        fireEvent.change(title, { target: { value: "take the garbage out"} });
        fireEvent.change(description, { target: { value: "done by 5:30pm before garbage truck comes."} });
        fireEvent.click(submit);
        expect(global.alert).toHaveBeenCalledTimes(1)
        expect(global.alert).toHaveBeenCalledWith(
            expect.objectContaining({
                action: "form submit",
                title: "take the garbage out",
                description: "done by 5:30pm before garbage truck comes."
            })
        )
    })
})