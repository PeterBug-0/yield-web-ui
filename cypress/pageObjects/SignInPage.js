class SignInPage {
  get phoneNumberInput() { return cy.get('input[name="Phone Number"]'); }
  get passwordInput() { return cy.get('input[name="password"]'); }
  get signInSubmitBtn() { return cy.get('button[type="submit"]'); }

  verifyOnPage() {
    cy.url().should('include', '/signin');
    this.phoneNumberInput.should('be.visible');
  }
}
export default new SignInPage();