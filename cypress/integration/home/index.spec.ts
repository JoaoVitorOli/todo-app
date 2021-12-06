/// <reference types="cypress" />

describe("Test the home page", () => {
  it("visit the home page", () => {
    cy.visit("http://localhost:8080/");
  });

  it("add new todo", () => {
    const input = cy.get('[data-test="todo-input"]');

    input.type("testando aplicação").type('{enter}');

    cy.get(".sc-pVTFL").should("have.text", "testando aplicação");
  });

  it("mark todo as done", () => {
    cy.get(".sc-furwcr > .sc-dkPtRN > .check")
      .click();
  });

  it("todo must be listed in 'completed section'", () => {
    cy.get("[name='completed']")
      .click();

    cy.get(".sc-pVTFL").should("exist");
  });

  it("todo must be not listed in 'Active' section", () => {
    cy.get("[name='active']")
      .click();

    cy.get("p").should("have.text", "0 items left");
  });

  it("shoult exclude todo", () => {
    cy.get(".sc-gsDKAQ > div > button")
      .click();

    cy.get("body").should("have.css", "background-color", "rgb(250, 250, 250)");
  });

  it("shoult toggle page theme", () => {
    cy.get("[name='completed']")
      .click();

    cy.get(".sc-furwcr > button")
      .click();

    cy.get("p").should("have.text", "0 items left");
  });
});
