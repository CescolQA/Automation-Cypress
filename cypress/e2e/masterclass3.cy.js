describe('Marsterclass3 PushingIT', () => {
  it('Deberia visitar la pagina de Fabrizio', () => {

       cy.visit('https://pushing-front.vercel.app/');
    cy.get("#user").type("pushingit90");
    cy.get("#pass").type("123456!");
    cy.get('[ value=Male]').check({force:true});
    cy.get("[ id=day]").select("13");
    cy.get("[name=month]").select("June");
    cy.get("#year").select("1988");
    cy.xpath("//button[ @id='submitForm']").click();
        cy.xpath("//a[contains(text(),'Pushing IT')]").should("exist");
    cy.xpath("//a[starts-with(@id,'todolist')]").click;
    
  });

});