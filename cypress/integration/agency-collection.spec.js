import { Label } from "@material-ui/icons";
import { visitAndLog } from "../plugins/utils.js";
describe("agency collection page", () => {
  it("select the first agency", () => {
    visitAndLog();
    const btn = cy.get(".MuiAutocomplete-endAdornment");
    btn.click();
    const label = cy.get("#cy-agency-label-option-0");
    label.click();
  });
});
