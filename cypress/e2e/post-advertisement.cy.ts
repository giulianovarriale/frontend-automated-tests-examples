describe("post advertisement", () => {
  it("user is able to post a new advertisement", () => {
    cy.visit("localhost:3000");

    cy.findByLabelText(/title/i).type("iPhone 13 Pro");
    cy.findByLabelText(/description/i).type("Brand new iPhone 13 Pro");
    cy.findByLabelText(/price/i).type("999.99");

    cy.findByRole("button", { name: /post advertisement/i }).click();

    cy.findByTestId("toast-title").should(
      "have.text",
      "Advertisement was successfully posted."
    );
  });
});
