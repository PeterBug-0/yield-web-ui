// cypress/pages/LandingPage.js
import BasePage from './BasePage';

class LandingPage extends BasePage {
  get #getStartedBtn() {
    return cy.contains('a', 'Start Growing');
  }

  get #loginLink() {
    return cy.contains('a', 'Log In');
  }

  navigateToLogin() {
    this.#getStartedBtn.click();
    this.#loginLink.click();
  }
}

export default new LandingPage();