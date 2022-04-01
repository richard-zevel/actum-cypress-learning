import BasePage from "./Base.page"

export default class SearchResultsPage extends BasePage {

  //  Page Object Elements
  searchResultContent = 'p.alert'

  // Page Object Methods
  searchTermAssert(term) {
    cy.get(this.searchResultContent).should('contain.text',  term)
  }
}