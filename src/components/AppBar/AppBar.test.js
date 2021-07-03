import AppBar from "./AppBar";
import { render, screen } from '@testing-library/react';

describe("AppBar", () => {
    it("should create AppBar", () => {
        render(<AppBar />)
        const header = screen.getByTestId('header');
        expect(header).toBeInTheDocument();
    })
})