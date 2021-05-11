/// <reference types="cypress" />

//Elements
//const NAME_FIELD = ":nth-child(1) > input" //cy.get(':nth-child(1) > input')
//const MAIL_FIELD = ":nth-child(2) > input"
//const PHONE_FIELD = ":nth-child(3) > input"

//const SAVE_BTN = ".blue"

//Elements

const VALUE_FIELD = ": > input"
const PAID_BOX = ": > .checkbox"

const SAVE_BTN = ".blue"


//function/action
//function createClient(name, mail, phone, content){
    //cy.get(NAME_FIELD).type(name)
    //cy.get(MAIL_FIELD).type(mail)
    //cy.get(PHONE_FIELD).type(phone)
    //cy.get(SAVE_BTN).click()
    //cy.contains("Clients")

//function/action
function createBill(value, paid, content){
    cy.get(VALUE_FIELS).type(value)
    cy.get(PAID_BOX).click(paid)
    cy.get(SAVE_BTN).click()
    cy.contains("Bills")
    }

    //exports
    exports.default = {
        createBill
    }



//exports
//exports.default ={
    //createClient
    
//}
