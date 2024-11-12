import { homePage } from "../../pages/homePage"
const homePageobj = new homePage()
import testData from "../../fixtures/testData.json"


describe('Add a product to the cart', () =>{
    before(()=> {
        cy.login(testData.login.username, testData.login.password)
    })
    it('add the product', () =>{
        homePageobj.searchProduct(testData.product.productName);
        homePageobj.addToCart()
        homePageobj.verifySuccessMessage().should('contain',testData.message.successMessage)
        .and('contain',testData.product.productName) 
    })
})