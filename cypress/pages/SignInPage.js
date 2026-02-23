import BasePage from './BasePage';

class SignInPage extends BasePage {
  get #phoneInput() {
    return cy.get('input[name*="phone"]');          
  }

  get #passwordInput() {
    return cy.get('input[name="password"]');
  }

  get #submitBtn() {
    return cy.get('button[type="submit"]');
  }

  get #signInHeading() {
    return cy.contains('h4', 'Welcome Back!');
  }

  // --- Assertions ---
    // Full page verification — call this at the start of any test that lands here.
  verifyOnPage() {
    this.verifyPageLoaded();
    this.verifyUrl('/signin');
    this.#signInHeading.should('be.visible');
    this.#phoneInput.should('be.visible');
  }

  // --- Actions ---
  /**
   * Fill and submit the sign-in form.
   * @param {string} phone
   * @param {string} password
   */
  login(phone, password) {
    this.#phoneInput.clear().type(phone);
    this.#passwordInput.clear().type(password, { log: false }); // log:false hides password from Cypress logs
    this.#submitBtn.click();
  }
}

export default new SignInPage();