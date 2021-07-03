import Fab from "./Fab";
import { render, screen } from '@testing-library/react';


const handleClick = (e) => {
    return
}
describe("Fab", () => {
    it("should create Fab", () => {
        render(<Fab handleClick={handleClick} />)
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    })
})