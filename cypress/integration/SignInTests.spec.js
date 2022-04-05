
import SignIn from "../../page_objects/SignIn.Page";

const signIn = new SignIn()

describe('SignIn Functionality Tests', () => {
    beforeEach(() => {
        signIn.visit()
    })
    it('Test that enters empty string as email and asserts error displayed', () => {
        signIn.fillEmailCreateForm('')
        signIn.isErrorDisplayed()
    })
    it('Test that enters invalid format of email and asserts error displayed', () => {
        signIn.fillGeneratedEmailCreateForm(false)
        signIn.isErrorDisplayed()
    })
})