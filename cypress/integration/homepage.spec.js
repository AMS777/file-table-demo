import { urls, ids } from '../support/config';

describe('Homepage', () => {
  beforeEach(() => {
    cy.visit(urls.homepage);
  });

  it('visits url', () => {
    cy.visit(urls.homepage);
  });

  it('has all the elements', () => {
    cy.get(ids.homepage.border).should('exist');
    cy.get(ids.homepage.title).should('exist');
    cy.get(ids.homepage.description).should('exist');
  });
});
