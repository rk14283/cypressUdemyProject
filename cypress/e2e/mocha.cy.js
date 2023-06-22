//Mocha has hooks which avoids repeated code
//hooks will run 1 time after each suite
//before will run 10 times
//beforeEach
//After
//afterEach

describe("Login feature test ", () => {
  before(() => {
    cy.log("Run the server locally ");
  });

  after(() => {
    cy.log("kill the server ");
  });
  beforeEach(() => {
    cy.log("Navigate to login page ");
  });
  it("should visit the login page correctly", function () {
    //cy.log("Run the server locally ");
    // cy.log("Navigate to login page ");
    cy.log("Website should have correct url ");
    //cy.log("kill the server ");
  });
  it("should be able to login", function () {
    //cy.log("Run the server locally ");
    //cy.log("Navigate to login page ");
    cy.log("fill the username and the password and login");
    cy.log("should navigate the login page");
  });
});
