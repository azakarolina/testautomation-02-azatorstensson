/// <reference types="cypress" /> 

import * as loginPage from "../pages/login-page"
import * as indexPage from "../pages/index-page"
import * as clientsPage from "../pages/clients-page"
import * as clientNewPage from "../pages/client-new-page"

var faker = require('faker');

let randomName = faker.name.findName();
let randomMail = faker.internet.email();
let randomPhone = faker.phone.phoneNumber();


describe("Testsuite", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")//("/")
        loginPage.confirmHeader("Login")
        loginPage.loginUser("Tester01","GteteqbQQgSr88SwNExUQv2ydb7xuf8c","Login") // Login?
        //"Tester Hotel Overwiev"
    });

    it("login and logout", () => {
        indexPage.logoutUser("Login")

        describe("Testsuite", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
        loginPage.confirmHeader("Login")
        loginPage.loginUser("tester01", "GteteqbQQgSr88SwNExUQv2ydb7xuf8c", "Tester Hotel Overview")
    });

    it("Login and logout", () => {
        indexPage.logoutUser("Login")    

        
    });
    it.only("Create client and verify", () => {// med only kommr den bara att loga ut en gång
        indexPage.viewClients("Clients")
        clientsPage.viewClientNew("New Client")
        clientNewPage.createClient(randomName, randomMail, randomPhone, "Client")//("tester", "tester@mail.com", "0123456789", "Clients")
        clientsPage.verifyLastClient(randomName, randomMail, randomPhone)//("tester", "tester@mail.com", "0123456789")
        clientsPage.deleteLastClient()
        indexPage.logoutUser("login")
    });
        });
            