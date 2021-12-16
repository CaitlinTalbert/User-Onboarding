describe('User Onboarding App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    //set up helpers to grab elements 
    const fNameInput = () => cy.get('input[name=first_name]');
    const emailInput = () => cy.get('input[name=email]'); 
    const passwordInput = () => cy.get('input[name=password]');
    const tosCheck = () => cy.get('input[name=termsOfService]'); 
    const foobarInput = () => cy.get('input[name=foobar]')
    //sanity tests 
    it('sanity test to make sure tests work', () => {
        expect(1 + 2).to.equal(3); 
        expect(2 + 2).not.to.equal(8); 
        expect({}).not.to.equal({}); 
        expect({}).to.eql({}); 
    })

})