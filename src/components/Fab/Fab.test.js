import Fab from "./Fab";
import { render, screen, fireEvent } from '@testing-library/react';

const c = jest.fn()

const handleClick = (e) => {
    c()
    return
}

describe("Fab", () => {
    it("should create Fab and be clickable", () => {
        render(<Fab handleClick={handleClick} />)
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        fireEvent.click(button)
        expect(c).toHaveBeenCalledTimes(1);
    })
})