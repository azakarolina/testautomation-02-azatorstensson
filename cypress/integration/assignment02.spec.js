/// <reference types="cypress" />
import * as acreatebillPage from "../pages/acreatebill-page"
import * as acreateclientPage from "../pages/acreateclient-page"
import * as acreatenewbillPage from "../pages/acreatenewbill-page"
import * as acreatenewclientPage from "../pages/acreatenewclient-page"
import * as acreatenewreservationPage from "../pages/acreatenewreservation-page"
import * as acreatenewroomPage from "../pages/acreatenewroom-page"
import * as acreatereservationPage from "../pages/acreatereservation-page"
import * as acreateroomPage from "../pages/acreateroom-page"
import * as aloginPage from "../pages/alogin-page"
import * as atesterhoteloverviewPage from "../pages/atesterhoteloverview-page"

//var faker = require('faker');

//let randomName = faker.name.findName();
//let randomMail = faker.internet.email();
//let randomPhone = faker.phone.phoneNumber();


describe("Testsuite", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
        aloginPage.confirmHeader("Login")
        aloginPage.loginUser("tester01", "GteteqbQQgSr88SwNExUQv2ydb7xuf8c", "Tester Hotel Overview")
    });
    
    it("Login and logout", () => {
        atesterhoteloverviewPage.logoutUser("Login")
            
    });
    it("Create room and verify", () => {
        atesterhoteloverviewPage.viewRooms("Rooms")
        acreateroomPage.viewRoomNew("New Room")
        acreatenewroomPage.createRoom("twin","2","8", "3000", "seaview", "Rooms")
        acreateroomPage.verifyLastRoom("twin", "2", "8", "3000", "seaview")
        acreateroomPage.deleteLastRoom()
        atesterhoteloverviewPage.logoutUser("Login")

    });
        
    it("Create bill and verify", () => {
        atesterhoteloverviewPage.viewBills("Bills")
        acreatebillPage.viewBillNew("New Bill")
        acreatenewbillPage.createbill("2000", "Bills")
        acreatebillPage.verifyLastRoom("2000")
        acreatebillPage.deleteLastbill()
        atesterhoteloverviewPage.logoutUser("Login")
    
    });
    it("Create Reservations and verify", () => {
        atesterhoteloverviewPage.viewReservations("Reservations")
        acreatereservationPage.viewReservationNew("New Reservation")
        acreatenewreservationPage.createreservation("2020-04-01", "2020-04-04", "Anna Andersson", "Floor 1, Room 102", "ID:2", "Reservations")
        acreatereservationPage.verifyLastReservation("2020-04-01", "2020-04-04", "Anna Andersson", "Room: 1", "ID: 1")
        acreatereservationPage.deleteLastreservation()
        atesterhoteloverviewPage.logoutUser("Login")
        
    });

    it.only("Create client and verify", () => {// med only kommr den bara att loga ut en gång
        atesterhoteloverviewPage.viewClients("Clients")
        acreateclientPage.viewClientNew("New Client")
        acreatenewclientPage.createClient("tester", "tester@mail.com", "123456789", "Clients") //(randomName, randomMail, randomPhone, "Clients"))
        acreateclientPage.verifyLastClient("tester", "tester@mail.com", "123456789") //(randomName, randomMail, randomPhone)
        acreateclientPage.deleteLastClient()
        atesterhoteloverviewPage.logoutUser("Login")

    });


    });
