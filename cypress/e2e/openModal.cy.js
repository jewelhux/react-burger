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
    cy.visit('http://localhost:3000');
    cy.contains('Конструктор');
  });
  // it('Найдем и кликнем на элемент', function () {
  //   cy.get('[data-testid=123]').contains('Великолепный бургер от JiK').should('exist');
  // });
  // it('Работает переход на страницу ленты заказов', function () {
  //   cy.get('button').contains('Оформить заказ').click();
  //   cy.contains('Вход');
  // });
});
