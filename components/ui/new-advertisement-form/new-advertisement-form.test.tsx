import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { NewAdvertisementForm } from "./new-advertisement-form";

test("fields are in the document", () => {
  render(<NewAdvertisementForm />);

  expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/price/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/allow bidding/i)).toBeInTheDocument();
});

test("display error messages when required fields are empty", async () => {
  render(<NewAdvertisementForm />);

  const submitButton = screen.getByRole("button", {
    name: /post advertisement/i,
  });

  userEvent.click(submitButton);

  expect(await screen.findByText(/title is required/i)).toBeInTheDocument();

  expect(
    await screen.findByText(/description is required/i)
  ).toBeInTheDocument();

  expect(
    await screen.findByText(/price must be at least \$0.50/i)
  ).toBeInTheDocument();
});

test.each(["abc", "10a", "10,99"])(
  "display error message when price format is invalid (%s)",
  async (value) => {
    render(<NewAdvertisementForm />);

    await userEvent.type(screen.getByLabelText(/price/i), value);

    await userEvent.click(
      screen.getByRole("button", {
        name: /post advertisement/i,
      })
    );

    expect(
      await screen.findByText(/please enter a valid price \(e.g 99.99\)/i)
    ).toBeInTheDocument();
  }
);
