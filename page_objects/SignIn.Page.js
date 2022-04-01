import BasePage from "./Base.page";

export default class SignIn extends BasePage {
    // Page Objects
    emailCreateInput = '#email_create'
    submitCreateBtn = '#SubmitCreate'
    formErrorBox = '#create_account_error'

    visit(){
        cy.visit('?controller=authentication&back=my-account')
    }

    fillEmailCreateForm(email){
        if(!email){
            cy.get(this.emailCreateInput).clear()    
        }
        else{
            cy.get(this.emailCreateInput).type(email)
        }        
        cy.get(this.submitCreateBtn).click()
    }

    errorDisplayedAssert(){
        return cy.get(this.formErrorBox).should('be.visible')
    }

    fillGeneratedEmailCreateForm(valid){
        if (valid) {
           var email = this.mockEmail.generateEmail()    
        }
        else{
            var email = 'dfvbjkdf1234!@#$sadf!$#@ '
        }
        this.fillEmailCreateForm(email)        
    }
}