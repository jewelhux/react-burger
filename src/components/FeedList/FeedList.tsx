import React from 'react';
import { useAppSelector } from '../../services/store';
import FeedItem from './FeedItem/FeedItem';
import styles from './FeedList.module.css';

const FeedList = () => {
  const allIngredientsCurrentBurger = useAppSelector((state) => state.allIngredients.ingredients);

  return (
    <div className={styles.activeContainer}>
      {allIngredientsCurrentBurger.map((item, index) => (
        <FeedItem key={index} />
      ))}
    </div>
  );
};

export default FeedList;
