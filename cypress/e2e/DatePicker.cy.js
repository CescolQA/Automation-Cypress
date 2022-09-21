describe('Probando el HP de la US', () => {

    it('Chequeando los Date Pickers', () => {
        cy.visit('https://demoqa.com/date-picker');
        cy.get("[id='datePickerMonthYearInput']").clear()
        cy.get("[id='datePickerMonthYearInput']").type("06/13/1988")
        cy.get("[id='datePickerMonthYearInput']").click()
        cy.get('[value="06/13/1988"]').should("exist")

        // cy.get("[id='dateAndTimePickerInput']").clear()
        cy.get("[id='dateAndTimePickerInput']").type("June 13, 1988 01:00 PM")
        cy.get("[id='dateAndTimePickerInput']").click()
        cy.contains("June 13, 1988 01:00 PM").should("exist")

        
    })
    
    
    
})

//________________________________________________________________________
// Comando predeterminado para que no ocurran errores de excepciones:
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
const origLog = Cypress.log
Cypress.log = function (opts, ...other) {
    if (opts.displayName === 'xhr'|| opts.displayName === 'fetch' && opts.url.startsWith('https://')) {
        return
    }
    return origLog(opts, ...other)
}