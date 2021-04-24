export const CY_ENV = Cypress.config();

export const getUrl = () => {
  let oUrl = "";
  if (process.env.NODE_ENV === "development") {
    oUrl = CY_ENV.localUrl;
  } else {
    oUrl = CY_ENV.prodUrl;
  }
  return oUrl;
};

export const clearSessionStorage = () => {
  cy.window().then(win => {
    win.sessionStorage.clear();
  });
};
export const login = (user, pass) => {
  clearSessionStorage();
  cy.get("#cy_email").type(user);
  cy.get("#cy_password").type(pass);
  cy.get("#cy_submitSignin").first().click();
};

export const logout = () => {
  cy.get("#cy_logout").first().click();
};

export const visitAndLog = (user = CY_ENV.user, pass = CY_ENV.pass) => {
  clearSessionStorage();
  const url = getUrl();
  cy.visit(url);
  cy.get("#cy_email").clear();
  cy.get("#cy_password").clear();
  login(user, pass);
};
