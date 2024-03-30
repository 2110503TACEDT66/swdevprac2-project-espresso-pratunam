import { render, screen } from "@testing-library/react";
import CarListPage from "../src/app/carlist/page"; 

describe("CarListPage component", () => {
  it("renders mock cars correctly", () => {
    render(<CarListPage />);
    const mockCarNames = ["Honda Civic", "Tesla Model 3", "Ford Mustang GT"];
    mockCarNames.forEach((carName) => {
      const carElement = screen.getByText(carName);
      expect(carElement).toBeInTheDocument();
    });
  });

});
