/// <reference types = "Cypress"/>

describe("Login feature test ", () => {
  // HTML elements
  //Automation tests = finding Elements + Actions + Assertions

  it("it should visit the login page correctly on ", function () {
    //cy.get("css selector")
    cy.visit("cypress/index.html");
    //my h1 found six elements, his found only 2
    //HTML tag and id both
    // cy.get("h1#header2");
    // cy.get(".header1");
    //we can have two classes and test passes
    //both classes but don't put any space
    cy.get(".main.header1");
  });
});
