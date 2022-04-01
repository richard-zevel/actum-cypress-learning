import BasePage from "./Base.page"

export default class HomePage extends BasePage {
  // Page Elements
  // Page Object Methods

  visit() {
    return cy.visit('http://automationpractice.com/index.php')
  }
}