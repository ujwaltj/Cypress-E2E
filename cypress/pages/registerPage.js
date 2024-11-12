export class registerPage {

    weblocators = {
        firstName:'#input-firstname',
        lastName:'#input-lastname',
        email:'#input-email',
        telephone:'#input-telephone',
        password: '#input-password',
        confirmPass: '#input-confirm',
        policyCheckbox:'input[type="checkbox"]',
        continueBtn:'.btn.btn-primary'

    }
    openURL() {

        cy.visit(Cypress.env('URL'))
    }

    enterFirstName(Fname){
        cy.get(this.weblocators.firstName).type(Fname);
    }

    enterLastName(Lname){
        cy.get(this.weblocators.lastName).type(Lname)
    }

    enterEmail(eMail){
        cy.get(this.weblocators.email).type(eMail)
    }

    enterTelephone(telePhone){
        cy.get(this.weblocators.telephone).type(telePhone)
    }

    enterPassword(pass){
        cy.get(this.weblocators.password).type(pass)
        cy.get(this.weblocators.confirmPass).type(pass)
    }

    // enterConfirmPassword(confirPassword){
    //     cy.get(this.weblocators.confirmPass).type(confirPassword)
    // }

    selectPolicyCheckBox(){
        cy.get(this.weblocators.policyCheckbox).check()
    }

    clickContinueButton() {
        cy.get(this.weblocators.continueBtn).click()
    }

    

}