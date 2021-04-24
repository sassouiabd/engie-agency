import {
  clearSessionStorage,
  getUrl,
  logout,
  visitAndLog,
} from "../plugins/utils.js";
describe("Signin page", () => {
  it("Visit the page", () => {
    clearSessionStorage();
    cy.visit(getUrl());
  });

  it("Entrer bad credentials", () => {
    visitAndLog("baduser@gmail.com", "badpassword");
  });

  it("Entrer right credentials", () => {
    visitAndLog();
    cy.url().should("include", "/agency-collection");
  });
  it("logout", () => {
    visitAndLog();
    logout();
  });
});
