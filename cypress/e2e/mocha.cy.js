/// <reference types = "Cypress"/>

describe("Login feature test ", () => {
  // HTML elements
  //Automation tests = finding Elements + Actions + Assertions

  it("it should visit the login page correctly on ", function () {
    //cy.get("css selector")
    cy.visit("cypress/index.html");
    //parent element class and child element
    //cy.get(".course-list > .list1");
    //Now we only get one bullet point
    //cy.get(".course-list").children(".list1");

    //children() command works in direct child and parent relationship
    //grand parent
  });
});
