export default class BasePage {
    // Page Elements
    searchInput = '#search_query_top'
    searchBtn = 'button.btn.btn-default.button-search'
    signInLink = 'a.login'
    signOutLink = 'a.logout'
    userNameLink = 'a.account'
    contactLink = '#contact-link > a'

    mockEmail = require('email-generator')

    //Page Object Methods
    visit() {
        return cy.visit('/')
    }

    searchFor(term) {
        if (!term) {
            cy.get(this.searchInput).clear()
        } else {
            cy.get(this.searchInput).clear().type(term)
        }
        cy.get(this.searchBtn).click()
    }

    signIn() {
        cy.get(this.signInLink).click()
    }

    signOut() {
        cy.get(this.signOutLink).click()
    }

    clickContactUs() {
        cy.get(this.contactLink).click()
    }
}