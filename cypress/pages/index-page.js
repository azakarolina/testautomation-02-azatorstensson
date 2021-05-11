/// <reference types="cypress" />


//Elements
const LOGOUT_BTN = ".user > .btn"
const VIEW_CLIENTS_BTN =".blocks > :nth-child(2) > .btn"

//function/action
function logoutUser(content){
    cy.get(LOGOUT_BTN).click();
    cy.contains(content)
}
function viewClients(content){
    cy.get(VIEW_CLIENTS_BTN).click();
    cy.contains(content)
}
//Exports
exports.default = {
    logoutUser,
    viewClients

}

