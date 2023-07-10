import React from 'react';
import { useAppSelector } from '../../../services/store';
import BlankContructorBun from '../BlankContructorBun/BlankContructorBun';
import BlankContructorIngredient from '../BlankContructorIngredient/BlankContructorIngredient';
import { BurgerElement } from '../BurgerElement/BurgerElement';
import ConstructorItem from '../ConstructorItem/ConstructorItem';
import { useDrop } from 'react-dnd';
import styles from './ConstructorList.module.css';
import { ITEM_DND_TYPE } from '../../../utils/const';
import { IData } from '../../../utils/interfaces';

const ConstructorList = () => {
  const allIngredientsCurrentBurger = useAppSelector(
    (state) => state.allIngredientsCurrentBurger.ingredients
  );
  const currentBurgerBun = useAppSelector<IData | null>(
    (state) => state.allIngredientsCurrentBurger.bun
  );
  const [, drop] = useDrop(() => ({
    accept: ITEM_DND_TYPE.BOX,
    drop: () => ({ name: 'Dustbin' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <div className={styles.mainContainer} ref={drop}>
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
          {allIngredientsCurrentBurger.map((item, index) => (
            <ConstructorItem indexElement={index} dataItem={item} key={item.key} />
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
