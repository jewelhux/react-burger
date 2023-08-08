import { LOCAL_HOST, BTN_SELECTOR } from '../../src/utils/const';

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
  it('Найдем кнопку оформления заказа и кликнем на неё', function () {
    cy.contains('Оформить заказ').click();
    cy.contains('Великолепный бургер от JiK');
  });
  it('Закроем окошко', function () {
    cy.get(BTN_SELECTOR).should('be.visible').click();
  });
});
