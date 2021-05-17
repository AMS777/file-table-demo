import { urls, ids, texts } from '../support/config';

describe('File table', () => {
  beforeEach(() => {
    cy.visit(urls.homepage);
  });

  it('exists and has all columns', () => {
    cy.get(ids.fileTable.table).should('exist');
    cy.get(ids.fileTable.columns.checkbox).should('exist');
    cy.get(ids.fileTable.columns.name).should('exist');
    cy.get(ids.fileTable.columns.device).should('exist');
    cy.get(ids.fileTable.columns.path).should('exist');
    cy.get(ids.fileTable.columns.status).should('exist');
    cy.get(ids.fileTable.columns.statusIcon).should('exist');
  });

  it('has file rows with data', () => {
    cy.get(ids.fileTable.row).should('contain', texts.devices[0]);
    cy.get(ids.fileTable.row).should('contain', texts.devices[1]);
  });
});
