/// <reference types = "Cypress"/>

describe("Login feature test ", () => {
  // HTML elements
  //Automation tests = finding Elements + Actions + Assertions

  it("it should visit the login page correctly on ", function () {
    //cy.get("css selector")
    cy.visit("cypress/index.html");

    //grandparent
    //works and correct result
    cy.get(".course-list > .list1");
    //this works, but does not give correct result
    cy.get(".course-container, .list1");
    //this works and gives the result
    cy.get(".course-list").find(".list1");
    //this does not work
    cy.get(".course-container").find(".list1");
  });
});
