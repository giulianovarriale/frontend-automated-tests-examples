import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { NewAdvertisementForm } from "./new-advertisement-form";

test("fields are in the document", () => {
  render(<NewAdvertisementForm />);

  expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/price/i)).toBeInTheDocument();

  expect(screen.getByLabelText(/allow bidding/i)).toBeInTheDocument();
});
