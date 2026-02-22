import LandingPage from '../pageObjects/LandingPage';
import SignInPage from '../pageObjects/SignInPage';

describe('Authentication Navigation Flow', () => {
  beforeEach(() => {
    // Visit the root defined in your cypress.config.js
    cy.visit('https://yield-qa.creditdirect.ng/');
  });

  it('should navigate from Landing Page to the Sign In screen', () => {
    // 1. Execute the consolidated flow
    LandingPage.navigateToLogin();

    // 2. Verify the end state
    SignInPage.verifyOnPage();
    
    // 3. (Optional) Quick sanity check of the UI text
    cy.contains('h1', 'Sign In').should('be.visible');
  });
});