import { LOCAL_HOST } from '../../src/utils/const';

describe('Приложение корректно загрузилось', function () {
  beforeEach(() => {
    cy.intercept('GET', 'api/auth/user', {
      fixture: 'user.json',
    });
    cy.intercept('GET', 'api/ingredients', {
      fixture: 'ingredients.json',
    });
    cy.intercept('POST', 'api/orders', {
      fixture: 'order.json',
    }).as('postOrder');

    window.localStorage.setItem('refreshToken', JSON.stringify('test-refreshToken'));
    window.localStorage.setItem('accessToken', JSON.stringify('test-accessToken'));
  });
  it('Переход на главную страничку', function () {
    cy.visit(LOCAL_HOST);
  });
  it('Перетаскивание булочки', function () {
    cy.contains('Краторная булка N-200i').as('draggable');
    cy.get('[class*="ConstructorList_mainContainer"]').as('dragzone');

    cy.get('@draggable').trigger('dragstart', { which: 1 });
    cy.get('@dragzone').trigger('drop', { force: true });
  });
  it('Перетаскивание первого ингредиента', function () {
    cy.contains('Соус Spicy-X').as('draggable');
    cy.get('[class*="ConstructorList_mainContainer"]').as('dragzone');

    cy.get('@draggable').trigger('dragstart', { which: 1 });
    cy.get('@dragzone').trigger('drop', { force: true });
  });
  it('Перетаскивание второго ингредиента', function () {
    cy.contains('Соус фирменный Space Sauce').as('draggable');
    cy.get('[class*="ConstructorList_mainContainer"]').as('dragzone');

    cy.get('@draggable').trigger('dragstart', { which: 1 });
    cy.get('@dragzone').trigger('drop', { force: true });
  });
  it('Удаление выбранного ингридиента по имени', function () {
    cy.get('[class*="ConstructorItem_mainContainer"]')
      .contains('Соус Spicy-X')
      .parent()
      .within(() => {
        cy.get('[class*="constructor-element__action"]').click();
      });
  });
});
