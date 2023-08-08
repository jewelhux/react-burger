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
  it('Найдем и кликнем на элемент краторной булочки и зароем окно через клик на внешнюю область', function () {
    cy.contains('Краторная булка N-200i').click();
    cy.contains('Калории,ккал 420');
    cy.contains('Белки,г 80');
    cy.contains('Жиры,г 24');
    cy.contains('Углеводы,г 53');
    cy.get('#overlayPopup').click({ force: true });
  });
  it('Ещё раз найдем и кликнем на элемент краторной булочки и зароем окно через клик на крестик модалки', function () {
    cy.contains('Краторная булка N-200i').click();
    cy.contains('Калории,ккал 420');
    cy.contains('Белки,г 80');
    cy.contains('Жиры,г 24');
    cy.contains('Углеводы,г 53');
    cy.get(BTN_SELECTOR).should('be.visible').click();
  });
});
