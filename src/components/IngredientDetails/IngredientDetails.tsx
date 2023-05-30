import React from 'react';
import { IData } from '../../utils/interfaces';
import styles from './IngredientDetails.module.css';

interface IModalProps {
  item: IData;
}

const IngredientDetails = ({ item }: IModalProps) => {
  return (
    <div className={styles.contentMain}>
      <div className={styles.contentMainImage}>
        <img src={item.image}></img>
      </div>
      <h3>Биокотлета из марсианской магнолии</h3>
      <ul className={styles.contentListInfo}>
        <li className={styles.contentListItem}>
          <p>Калории,ккал</p>
          <p>244,4</p>
        </li>
        <li className={styles.contentListItem}>
          <p>Белки,г</p>
          <p>244,4</p>
        </li>
        <li className={styles.contentListItem}>
          <p>Жиры,г</p>
          <p>244,4</p>
        </li>
        <li className={styles.contentListItem}>
          <p>Углеводы,г</p>
          <p>244,4</p>
        </li>
      </ul>
    </div>
  );
};

export default IngredientDetails;
