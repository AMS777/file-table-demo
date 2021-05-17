import { urls, ids } from '../support/config';

describe('Table', () => {
  beforeEach(() => {
    cy.visit(urls.homepage);
  });

  it('visits url', () => {
    cy.visit(urls.homepage);

  });

  it('has title and description', () => {
    cy.get(ids.homepage.title).should('exist');
    cy.get(ids.homepage.description).should('exist');
  });

});
