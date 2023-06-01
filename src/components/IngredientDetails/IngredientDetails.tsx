import React from 'react';
import { IData } from '../../utils/interfaces';
import styles from './IngredientDetails.module.css';

interface IIngredientDetailsProps {
  item: IData;
}

const IngredientDetails = ({ item }: IIngredientDetailsProps) => {
  return (
    <div className={styles.contentMain}>
      <div className={styles.contentMainImage}>
        <img src={item.image}></img>
      </div>
      <h3>{item.name}</h3>
      <ul className={styles.contentListInfo}>
        <li className={styles.contentListItem}>
          <p>Калории,ккал</p>
          <p>{item.calories}</p>
        </li>
        <li className={styles.contentListItem}>
          <p>Белки,г</p>
          <p>{item.proteins}</p>
        </li>
        <li className={styles.contentListItem}>
          <p>Жиры,г</p>
          <p>{item.fat}</p>
        </li>
        <li className={styles.contentListItem}>
          <p>Углеводы,г</p>
          <p>{item.carbohydrates}</p>
        </li>
      </ul>
    </div>
  );
};

export default IngredientDetails;