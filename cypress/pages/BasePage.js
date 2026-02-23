
 
class BasePage { // BasePage — the parent class for all Page Objects. Shared behaviour (waiting for page load, asserting URLs, common actions)
 
   /**
   * Navigate to a path relative to baseUrl.
   * @param {string} path - e.g. '/signin', '/dashboard'
   */
  visit(path = '/') {
    cy.visit(path);
  }

  /**
   * Assert the current URL contains an expected segment.
    @param {string} urlSegment - e.g. '/signin'
   */
  verifyUrl(urlSegment) {
    cy.url().should('include', urlSegment);
  }

  verifyPageLoaded() { // Assert the page has fully loaded by checking the document state.
    cy.document().should('have.property', 'readyState', 'complete');
  }

  /**
   * Get an element and assert it is visible — combines two common steps.
   * @param {string} selector
   */
  verifyElementVisible(selector) {
    cy.get(selector).should('be.visible');
  }
}

export default BasePage;