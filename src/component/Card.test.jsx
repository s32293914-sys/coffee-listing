import { expect } from "vitest";
import Card from "./Card";
import { render, screen } from "@testing-library/react";

describe("Card component", () => {
  it("should return coffee name", () => {
    const mockCoffee = {
      id: 1,
      name: "Cappuccino",
      price: "$5.00",
      image: "test.jpg",
      rating: 4.5,
      votes: 100,
      popular: true,
    };
    render(<Card coffee={mockCoffee} />);
    expect(screen.getByText("Cappuccino")).toBeInTheDocument();
  });
  it("should return coffee price", () => {
    const mockCoffee = {
      id: 1,
      name: "Cappuccino",
      price: "$5.00",
      image: "test.jpg",
      rating: 4.5,
      votes: 100,
      popular: true,
    };
    render(<Card coffee={mockCoffee} />);
    expect(screen.getByText("$5.00")).toBeInTheDocument();
  });
  it("should return coffee if coffee is popular is true", () => {
    const mockCoffee = {
      id: 1,
      name: "Cappuccino",
      price: "$5.00",
      image: "test.jpg",
      rating: 4.5,
      votes: 100,
      popular: true,
    };
    render(<Card coffee={mockCoffee} />);
    expect(screen.getByText("popular")).toBeInTheDocument();
  });
  it("should return coffee if coffee is popular is false", () => {
    const mockCoffee = {
      id: 1,
      name: "Cappuccino",
      price: "$5.00",
      image: "test.jpg",
      rating: 4.5,
      votes: 100,
      popular: false,
    };
    render(<Card coffee={mockCoffee} />);
    expect(screen.queryByText("popular")).not.toBeInTheDocument();
  });
  it("should return if coffee is availble true", () => {
    const mockCoffee = {
      id: 1,
      name: "Cappuccino",
      price: "$5.00",
      image: "test.jpg",
      rating: 4.5,
      votes: 100,
      popular: false,
      available: true,
    };
    render(<Card coffee={mockCoffee} />);
    expect(screen.getByText("available")).toBeInTheDocument();
  });
});
