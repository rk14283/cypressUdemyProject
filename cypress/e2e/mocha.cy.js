/// <reference types = "Cypress"/>

describe("Login feature test ", () => {
  // HTML elements
  //Automation tests = finding Elements + Actions + Assertions

  it("it should visit the login page correctly on ", function () {
    cy.visit("cypress/index.html");
    cy.get(".course-list .list1").next(); //this would select selenium
    cy.get(".course-list .list2").nextAll(); //now we can select all courses we need
    cy.get(".course-list .list2").nextUntil(".list7"); //now we add a limit
    cy.get(".course-list .list3").prev();
    cy.get(".course-list .list7").prevAll(); //this selcts all elments above 7
    cy.get(".course-list .list7").prevUntil(".list3");
  });
});
