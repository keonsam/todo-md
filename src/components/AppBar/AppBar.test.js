import AppBar from "./AppBar";
import { render, screen, fireEvent } from '@testing-library/react';


const onSubmit = jest.fn((e) => {
    console.log(e)
    return;
})

describe("AppBar", () => {
    it("should create AppBar", () => {
        render(<AppBar />)
        const header = screen.getByTestId('header');
        expect(header).toBeInTheDocument();
    })

    it("should be able to search and submit", () => {
        render(<AppBar onSubmit={onSubmit} />)
        const search = screen.getByLabelText(/Search/i);
        fireEvent.change(search, { target: { value: "testing" } });
        const submit = screen.getByRole("button", { name: /Submit/i });
        fireEvent.click(submit);
        expect(onSubmit).toHaveBeenCalledTimes(1)
        expect(onSubmit).toHaveBeenCalledWith("testing")
    })
})