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
  it('Проверка, что мы открыли главную страничку', function () {
    cy.visit(LOCAL_HOST);
  });
});
