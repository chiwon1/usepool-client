/// <reference types="cypress" />

describe('Home Page', () => {
  it('should have inputs and buttons', () => {
    cy.visit('');
    cy.get(
      ':nth-child(1) > .sc-hHfuMS > .sc-dmlqKv > .sc-kfzBvY > .sc-fKFxtB > .sc-idOiZg > div > .pac-target-input',
    ).should('be.enabled');
    cy.get(
      ':nth-child(5) > .sc-hHfuMS > .sc-dmlqKv > .sc-kfzBvY > .sc-fKFxtB > .sc-idOiZg > div > .pac-target-input',
    ).should('be.enabled');
    cy.get('.sc-bkzYnD > input').should('be.enabled');
    cy.get('.sc-fodVek > button').should('be.enabled');
    cy.get('.sc-gKseQn').should('be.visible');
    cy.get('.sc-jrAFXE').should('be.visible');
  });
});
