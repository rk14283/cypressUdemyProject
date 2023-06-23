/// <reference types = "Cypress"/>

describe("Login feature test ", () => {
  //An array to run tests on many different screens

  ["macbook-15", "iphone-x"].forEach((size) => {
    it("it should visit the login page correctly on " + size, function () {
      //Allows to run tests against specific devices
      cy.viewport(size);
    });
  });
});
