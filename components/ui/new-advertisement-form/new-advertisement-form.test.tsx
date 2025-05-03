import { expect, test, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { NewAdvertisementForm } from "./new-advertisement-form";
import { Toaster } from "../toaster";
import { createAdvertisement } from "@/actions/create-advertisement";

vi.mock("@/actions/create-advertisement");

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

test("display success message when form is submitted", async () => {
  const SUCCESS_MESSAGE = /advertisement was successfully posted/i;

  vi.mocked(createAdvertisement).mockResolvedValue();

  render(
    <>
      <NewAdvertisementForm />
      <Toaster duration={300} />
    </>
  );

  await userEvent.type(screen.getByLabelText(/title/i), "iPhone 13 Pro");

  await userEvent.type(
    screen.getByLabelText(/description/i),
    "Brand new iPhone 13 Pro"
  );

  await userEvent.type(screen.getByLabelText(/price/i), "999.99");

  const submitButton = screen.getByRole("button", {
    name: /post advertisement/i,
  });

  await userEvent.click(submitButton);

  expect(await screen.findByTestId("toast-title")).toHaveTextContent(
    SUCCESS_MESSAGE
  );

  await waitFor(() => {
    expect(screen.queryByTestId("toast-title")).not.toBeInTheDocument();
  });
});

test("display error message when form submission fails", async () => {
  const ERROR_MESSAGE =
    /something went wrong. please try again or contact support./i;

  vi.mocked(createAdvertisement).mockRejectedValue(new Error("Oops!"));

  render(
    <>
      <NewAdvertisementForm />
      <Toaster duration={300} />
    </>
  );

  await userEvent.type(screen.getByLabelText(/title/i), "iPhone 13 Pro");

  await userEvent.type(
    screen.getByLabelText(/description/i),
    "Brand new iPhone 13 Pro"
  );

  await userEvent.type(screen.getByLabelText(/price/i), "999.99");

  const submitButton = screen.getByRole("button", {
    name: /post advertisement/i,
  });

  await userEvent.click(submitButton);

  expect(await screen.findByTestId("toast-title")).toHaveTextContent(
    ERROR_MESSAGE
  );

  await waitFor(() => {
    expect(screen.queryByTestId("toast-title")).not.toBeInTheDocument();
  });
});
