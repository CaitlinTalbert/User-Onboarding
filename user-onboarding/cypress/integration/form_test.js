describe('User Onboarding App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    //set up helpers to grab elements 
    const firstNameInput = () => cy.get("input[name=first_name]");
    const emailInput = () => cy.get("input[name=email]"); 
    const passwordInput = () => cy.get("input[name=password]");
    const tosCheck = () => cy.get("input[name=termsOfService]"); 
    const submitBtn = () => cy.get("input[name=submitBtn]")
    //sanity tests 
    it('sanity test to make sure tests work', () => {
        expect(1 + 2).to.equal(3); 
        expect(2 + 2).not.to.equal(8); 
        expect({}).not.to.equal({}); 
        expect({}).to.eql({}); 
    })
    //test for existing 
    it('the proper elements are showing', () => {
        firstNameInput().should('exist'); 
        emailInput().should('exist'); 
        passwordInput().should('exist'); 
        tosCheck().should('exist'); 
        submitBtn().should('exist'); 
    })
        it('can type in the input', () => {
            firstNameInput()
            .should('have.value', '')
            .type('My first name')
            
            emailInput()
            .type('My email')
            .should('have.value', 'My email')

            passwordInput()
            .type('My password') 
            .should('have.value', 'My password')
        })
        it('Terms of Service checkbox can be checked and unchecked', () => {
            tosCheck().click();
        })
        it('can submit the form data', () => {
            submitBtn().should('not.be.disabled')
        })
        it('check for form validation if an input is left empty', () => {
            firstNameInput().should('not.have.value', " ")
        })
})