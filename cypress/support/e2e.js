// cypress/support/e2e.js
import './commands';

beforeEach(() => {
  // Stub out all analytics calls so they never appear in logs or slow down tests
  cy.intercept('POST', '**/google-analytics.com/**', { statusCode: 204, body: '' }).as('blockGA');
  cy.intercept('GET', '**/googletagmanager.com/**', { statusCode: 204, body: '' }).as('blockGTM');
});

Cypress.on('uncaught:exception', (err) => {
  const ignoredErrors = [
    'ResizeObserver loop limit exceeded',
  ];

  if (ignoredErrors.some((msg) => err.message.includes(msg))) {
    return false;
  }
});