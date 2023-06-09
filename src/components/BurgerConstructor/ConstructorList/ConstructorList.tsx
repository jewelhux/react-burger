import React from 'react';
import { useAppSelector } from '../../../store/store';
import { BurgerElement } from '../BurgerElement/BurgerElement';
import ConstructorItem from '../ConstructorItem/ConstructorItem';
import styles from './ConstructorList.module.css';

const ConstructorList = () => {
  const allIngredients = useAppSelector((state) => state.allIngredients);
  const dataBun = allIngredients.ingredients.filter((item) => item.type === 'bun');
  const dataNotBul = allIngredients.ingredients.filter((item) => item.type !== 'bun');

  if (allIngredients.ingredients.length === 0) {
    return <div className={styles.mainContainer}>Список пуст</div>;
  }

  return (
    <div className={styles.mainContainer}>
      <BurgerElement
        type="top"
        isLocked={true}
        text={`${dataBun[0].name} (верх)`}
        price={dataBun[0].price}
        thumbnail={dataBun[0].image}
      />
      <div className={styles.activeContainer}>
        {dataNotBul.map((item) => (
          <ConstructorItem dataItem={item} key={item._id} />
        ))}
      </div>
      <BurgerElement
        type="bottom"
        isLocked={true}
        text={`${dataBun[0].name} (низ)`}
        price={dataBun[0].price}
        thumbnail={dataBun[0].image}
      />
    </div>
  );
};

export default ConstructorList;
