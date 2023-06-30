import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../services/store';
import styles from './IngredientDetails.module.css';

const IngredientDetails = () => {
  const navigate = useNavigate();
  const currentIngredient = useAppSelector((state) => state.currentIngredient.ingredient);
  const currentIngredientId = currentIngredient?._id ?? null;

  if (!currentIngredientId) {
    navigate('/');
  }

  return (
    <Link
      key={currentIngredientId}
      // Тут мы формируем динамический путь для нашего ингредиента
      to={`/ingredients/${currentIngredientId}`}
      // а также сохраняем в свойство background роут,
      // на котором была открыта наша модалка
      state={{ background: location }}
      className={styles.link}
    >
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
    </Link>
  );
};

export default IngredientDetails;
