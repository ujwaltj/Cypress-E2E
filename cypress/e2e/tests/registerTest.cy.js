import { registerPage } from "../../pages/registerPage"
import registerData from '../../fixtures/registerData.json'
const registerObj =new registerPage();
describe('Resgister a User', () => {

    it('register flow', ()=> {
        registerObj.openURL();
        registerObj.enterFirstName(registerData.firstName);
        registerObj.enterLastName(registerData.lastName);
        registerObj.enterEmail(registerData.email);
        registerObj.enterTelephone(registerData.telephone);
        registerObj.enterPassword(registerData.password);
        registerObj.selectPolicyCheckBox();
        registerObj.clickContinueButton();
    })
})