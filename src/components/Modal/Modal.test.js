import Modal from "./Modal";
import { render, screen, fireEvent } from '@testing-library/react';

global.alert = jest.fn()

const handleSubmit = (e) => {
    e.preventDefault();
    global.alert({action: "form submit", title: "placeholder"})
}

describe("Fab", () => {
    it("should create Modal", () => {
        render(<Modal />)
        const modal = screen.getByTestId('modal');
        expect(modal).toBeInTheDocument();
    })

    it("should be to submit modal form", () => {
        render(<Modal handleSubmit={handleSubmit}/>)
        const modal = screen.getByTestId('modal');
        expect(modal).toBeInTheDocument();
        const submit = screen.getByRole("button", { name: /Submit/i });
        fireEvent.click(submit);
        expect(global.alert).not.toHaveBeenCalled();
        const title = screen.getByLabelText(/Title/i);
        fireEvent.change(title, { target: { value: 'do the laundry' } });
        fireEvent.click(submit);
        expect(global.alert).toHaveBeenCalledTimes(1)
        expect(global.alert).toHaveBeenCalledWith(
            expect.objectContaining({
                action: "form submit",
                title: "placeholder"
            })
        )
    })
})