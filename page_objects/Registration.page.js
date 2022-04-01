import cypress from "cypress";
import BasePage from "./Base.page";

export default class RegistrationPage extends BasePage {

    //Page Objects

    //#region Personal Info Elements
    accountCreate = '.account_creation'
    genderInputs = '[name="id_gender"]'
    firstNameCustInput = '#customer_firstname'
    lastNameCustInput = '#customer_lastname'
    emailInput = '#email'
    passwordInput = '#passwd'
    daySelectEl = '#id'
    monthSelectEl = '#months'
    yearSelectEl = '#years'
    newsCheckbox = '#newsletter'
    optinCheckbox = '#optin'
    //#endregion

    //#region Your Address Elements
    firstNameInput = '#firstname'
    lastNameInput = '#lastname'
    addressInput = '#address1'
    cityInput = '#city'
    stateSelect= 'select#id_state'
    postcodeInput = '#postcode'
    countrySelect = 'select#id_country'
    mobileInput = '#phone_mobile'
    addressAliasInput = '#alias'
    //#endregion

    fieldErrors = '.inline-info'
    dataAlerts = 'div.alert.alert-danger'
    registerBtn = '#submitAccount'

    submitCreateAccountForm() {
        cy.get(this.registerBtn).click()
    }

    fillMandatoryFormFields() {
        // Choose Gender
        cy.get(this.genderInputs).first().click()
        // Enter First and Last Name
        cy.get(this.firstNameCustInput).type('John')
        cy.get(this.lastNameCustInput).type('Doe')
        // Enter Password test123
        cy.get(this.passwordInput).type('test123')
        // Enter Address info
        cy.get(this.addressInput).type('123')
        cy.get(this.cityInput).type('Prague')
        // Select a state from dropdown Wyoming
        cy.get(this.stateSelect).select('50')
        // Enter Postal Code
        cy.get(this.postcodeInput).type('12345')
        // Select Country from dropdown
        cy.get(this.countrySelect).select('United States')
        //Enter Phone Number
        cy.get(this.mobileInput).type('123456789')
    }
}