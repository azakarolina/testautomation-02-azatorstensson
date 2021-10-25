//cy.log('At login page!') 
    //cy.per/// <reference types="cypress" />

    describe('First example', () => {
        it('Test case 1', () => {
        cy.visit('http://localhost:3000/login')
        cy.title().should('eq','Testers Hotel')
        cy.contains('Login')
        cy.percySnapshot('index-page')
      //now we are at the log in page
        cy.log ('At login page!')
        cy.percySnapshot('index-page')
    
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Welcome tester01!')
        cy.wait(5000)
        cy.log('At dashboard page!')
        cy.percySnapshot('dashboard-page')
        
        cy.get(':nth-child(1) > .btn').click()
        cy.wait(5000)
        cy.log('At room page!')
        cy.contains('Room')
        cy.wait(5000)
        cy.log('At room page!')
        cy.percySnapshot('room page')
    
        cy.get(':nth-child(3) > .btn').click()
        cy.contains('Welcome tester01!')
        cy.wait(5000)
        cy.log('At dashboard page!')
        
    
        cy.get(':nth-child(3) > .btn').click()
        cy.log('At bills page!')
        cy.contains('Bills')
        cy.wait(5000)
        cy.percySnapshot('bills page')
    
        cy.get(':nth-child(3) > .btn').click()
        cy.contains('Welcome tester01!')
        cy.wait(5000)
        cy.log('At dashboard page!')
    
        cy.get(':nth-child(4) > .btn').click()
        cy.wait(5000)
        cy.log('At reservation page!')
        cy.contains('Reservations')
        cy.wait(5000)
        cy.log('At reservation page!')
        cy.percySnapshot('reservation page')
    
        cy.get(':nth-child(3) > .btn').click()
        cy.contains('Welcome tester01!')
        cy.wait(5000)
        cy.log('At dashboard page!')
    
        //cy.get(':nth-child(2) > .btn').click()
        //cy.log('At client page!')
        //cy.contains('Clients')
        //cy.wait(5000)
        //cy.percySnapshot('clients page')
    
        
        
        
    
    
    
        
        
        })
    
    })
    // här är bara kod rakt uppifrån och ner end to end. Kan också bygga in bilder.
    