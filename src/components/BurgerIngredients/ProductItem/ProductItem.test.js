import React from 'react';
import renderer from 'react-test-renderer';
import ProductItem from './ProductItem';

const TEST_DATA = {
  _id: '123',
  name: 'Name',
  type: 'string',
  proteins: 0,
  fat: 0,
  carbohydrates: 0,
  calories: 0,
  price: 0,
  image: 'string',
  image_mobile: 'string',
  image_large: 'string',
  __v: 123,
};

it('Ссылка рендерится без ошибок', () => {
  const tree = renderer.create(<ProductItem dataItem={TEST_DATA} />).toJSON();
  expect(tree).toMatchSnapshot();
});
