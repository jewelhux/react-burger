import React from 'react';
import { IData } from '../../../utils/interfaces';
import ProductItem from '../ProductItem/ProductItem';
import styles from './IngredientCategory.module.css';

interface IIngredientCategoryProps {
  ingredientList: IData[];
}

const IngredientCategory = ({ ingredientList }: IIngredientCategoryProps) => {
  const ingredientName = ingredientList[0].type;
  let titleName = '';

  if (ingredientName === 'main') titleName = 'Начинки';
  if (ingredientName === 'sauce') titleName = 'Суосы';
  if (ingredientName === 'bun') titleName = 'Булки';

  return (
    <>
      <h2>{titleName}</h2>
      <ul className={styles.productGroup}>
        {ingredientList.map((item) => (
          <ProductItem dataItem={item} key={item._id} />
        ))}
      </ul>
    </>
  );
};

export default IngredientCategory;
