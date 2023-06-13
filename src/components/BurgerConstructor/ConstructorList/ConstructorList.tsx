import React from 'react';
import { useAppSelector } from '../../../store/store';
import BlankContructorBun from '../BlankContructorBun/BlankContructorBun';
import BlankContructorIngredient from '../BlankContructorIngredient/BlankContructorIngredient';
import { BurgerElement } from '../BurgerElement/BurgerElement';
import ConstructorItem from '../ConstructorItem/ConstructorItem';
import styles from './ConstructorList.module.css';

const ConstructorList = () => {
  const allIngredientsCurrentBurger = useAppSelector(
    (state) => state.allIngredientsCurrentBurger.ingredients
  );
  const currentBurgerBun = useAppSelector((state) => state.allIngredientsCurrentBurger.bun);

  return (
    <div className={styles.mainContainer}>
      {currentBurgerBun ? (
        <BurgerElement
          type="top"
          isLocked={true}
          text={`${currentBurgerBun.name} (верх)`}
          price={currentBurgerBun.price}
          thumbnail={currentBurgerBun.image}
        />
      ) : (
        <BlankContructorBun />
      )}
      {allIngredientsCurrentBurger.length ? (
        <div className={styles.activeContainer}>
          {allIngredientsCurrentBurger.map((item) => (
            <ConstructorItem dataItem={item} key={item.key} />
          ))}
        </div>
      ) : (
        <BlankContructorIngredient />
      )}
      {currentBurgerBun ? (
        <BurgerElement
          type="bottom"
          isLocked={true}
          text={`${currentBurgerBun.name} (низ)`}
          price={currentBurgerBun.price}
          thumbnail={currentBurgerBun.image}
        />
      ) : (
        <BlankContructorBun />
      )}
    </div>
  );
};

export default ConstructorList;
