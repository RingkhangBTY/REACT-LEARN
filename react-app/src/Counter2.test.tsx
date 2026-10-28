import { render, screen, fireEvent } from "@testing-library/react";
import Counter2 from "./Counter2.tsx";

test ("Count increment", ()=>{
    render(<Counter2/>);

    const heading = screen.getByText("Count: 0");

    expect(heading).toBeInTheDocument();

    const button = screen.getByRole("button", {
        name: "Increment",
    });

    fireEvent.click(button);

    expect(screen.getByText("Count: 1")).toBeInTheDocument();
})