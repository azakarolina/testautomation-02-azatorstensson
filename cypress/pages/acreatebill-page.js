/// <reference types="cypress" />



//Elements
//const CREATE_CLIENT_BTN = "h2 > .btn"
//const CLIENT_LIST = ".client"

//const THREE_DOTS_BTN = ".action > ing"
//const DELETE_BTN = ".menu > :nth-child(2)"
//Elements

//const ID_FIELD = cy.get('.id')
//const VALUE_FIELD = cy.get('.value')
//const PAID_FIELD = cy.get('.paid')

 
const CREATE_BILL_BTN = 'h2 > .btn'
const BILL_LIST = ".bill"

const THREE_DOTS_BTN = ".action > img"
const DELETE_BTN = ".menu > :nth-child(2)"
//const BACK_BTN = ".action > (':nth-child(3) > .btn')


//function/action
//function viewClientNew(content){
    //cy.get(CREATE_CLIENT_BTN).click()
    //cy.contains(content)
//}
//function/action
function viewBillNew(content){
    cy.get(CREATE_BILL_BTN).click()
    cy.contains(content)
}
function verifyLastBill(value,paid){
    cy.get(BILL_LIST).last()
    .should("contain", value)
    .and("contain", paid)
    

    
    
}
function deleteLastBill(){
    cy.get(THREE_DOTS_BTN).last().click()
    cy.get(DELETE_BTN).click()
}

//function verifyLastClient(name, mail, phone){
    //cy.get(CLIENT_LIST).last()
    //.should("contain", name)
    //.and("contain", mail)
    //.and("contain", phone)
//}
//function deleteLastClient(){
    //cy.get(THREE_DOTS_BTN).last().click()
    //cy.get(DELETE_BTN).click()
//}

//exports
//exports.default = {
    //viewClientNew,
    //verifyLastClient,
    //deleteLastClient
//}
//exports
exports.default = {
    viewBillNew,
    verifyLastBill,
    deleteLastBill
}


    

