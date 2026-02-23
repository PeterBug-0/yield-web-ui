import LandingPage from '../../pages/LandingPage';
import SignInPage from '../../pages/SignInPage';

describe('Authentication — Sign In Flow', () => {
  // Load fixture data once for the whole suite
  let users;

  before(() => {
    cy.fixture('users').then((data) => {
      users = data;
    });
  });

  beforeEach(() => {
    // Uses baseUrl from cypress.config.js — no hardcoded URLs in specs
    LandingPage.visit('/');
  });

  context('Navigation', () => {
    it('should navigate from Landing Page to the Sign In screen', () => {
      LandingPage.navigateToLogin();
      SignInPage.verifyOnPage();
    });
  });

  context('Form Validation', () => {
    beforeEach(() => {
      SignInPage.visit('/signin');
      SignInPage.verifyOnPage();
    });

    // it('should display error with invalid credentials', () => {
    //   SignInPage.login(users.invalidUser.phone, users.invalidUser.password);
    //   cy.contains('Invalid credentials').should('be.visible'); // adjust to your app's error text
    // });

    it('should successfully log in with valid credentials', () => {
      SignInPage.login(users.validUser.phone, users.validUser.password);
      cy.url().should('include', '/dashboard'); // adjust to your post-login route
    });
  });
});