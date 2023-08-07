describe('Приложение корректно загрузилось', function () {
  beforeEach(() => {
    cy.intercept('GET', 'api/auth/user', { fixture: 'user.json' });
    cy.intercept('POST', 'api/orders', { fixture: 'order.json' }).as('postOrder');

    // Устанавливаем токены:
    window.localStorage.setItem('refreshToken', JSON.stringify('test-refreshToken'));
    cy.setCookie('accessToken', 'test-accessToken');
  });
  it('should be available on localhost:3000', function () {
    cy.visit('http://localhost:3000');
  });
  it('На начальной странице есть пункт Констурктор', function () {
    cy.contains('Конструктор');
  });
  // it('Работает переход на страницу ленты заказов', function () {
  //   cy.get('button').contains('Оформить заказ').click();
  //   cy.contains('Вход');
  // });
});
