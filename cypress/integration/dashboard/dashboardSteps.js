import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
Given('user is on login page',()=>{
    cy.visit('https://admin-demo.nopcommerce.com/login');
})
When('user enters username and password',()=>{

    cy.get('#Password').clear().type('admin');
    cy.get('#Email').clear().type('admin@yourstore.com');

})
And('clicks on login button',()=>{
    cy.get('.button-1').click();
})


Given('user is on dashboard page',()=>{

})
And('click on start accepting orders',()=>{

})
Then('welcome to store accordion should open',()=>{

})