import React from 'react';
import { useAppSelector } from '../../services/store';
import styles from './IngredientDetails.module.css';

const IngredientDetails = () => {
  const currentIngredient = useAppSelector((state) => state.currentIngredient.ingredient);

  return (
    <div className={styles.contentMain}>
      <div className={styles.contentMainImage}>
        <img src={currentIngredient?.image ?? '-'}></img>
      </div>
      <h3>{currentIngredient?.name ?? '-'}</h3>
      <ul className={styles.contentListInfo}>
        <li className={styles.contentListItem}>
          <p>Калории,ккал</p>
          <p>{currentIngredient?.calories ?? '-'}</p>
        </li>
        <li className={styles.contentListItem}>
          <p>Белки,г</p>
          <p>{currentIngredient?.proteins ?? '-'}</p>
        </li>
        <li className={styles.contentListItem}>
          <p>Жиры,г</p>
          <p>{currentIngredient?.fat ?? '-'}</p>
        </li>
        <li className={styles.contentListItem}>
          <p>Углеводы,г</p>
          <p>{currentIngredient?.carbohydrates}</p>
        </li>
      </ul>
    </div>
  );
};

export default IngredientDetails;
