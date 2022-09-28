import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

Given('user is on login page',()=>{
    cy.visit('https://admin-demo.nopcommerce.com/login');
})
