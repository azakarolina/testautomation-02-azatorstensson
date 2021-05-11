/// <reference types="cypress" />


//Elements
const LOGOUT_BTN = ".user > .btn"
const VIEW_ROOMS_BTN= ".blocks > :nth-child(1) > .btn"
const VIEW_CLIENTS_BTN =".blocks > :nth-child(2) > .btn"
const VIEW_BILLS_BTN=".blocks > :nth-child(3) > .btn"
const VIEW_RESERVATIONS_BTN=".blocks > :nth-child(4) > .btn"


//function/action
function logoutUser(content){
    cy.get(LOGOUT_BTN).click();
    cy.contains(content)
}
function viewRooms (content){
    cy.get(VIEW_ROOMS_BTN).click();
    cy.contains (content)
    
}
function viewClients(content){
    cy.get(VIEW_CLIENTS_BTN).click();
    cy.contains(content)
}

function viewBills (content){
    cy.get(VIEW_BILLS_BTN).click();
    cy.contains (content)
}
function viewReservations (content){
    cy.get(VIEW_RESERVATIONS_BTN).click();
    cy.contains (content)
}

//Exports
exports.default = {
    logoutUser,
    viewRooms,
    viewClients,
    viewBills,
    viewReservations

}

