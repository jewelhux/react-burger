import React from 'react';
import { IData } from '../../../utils/interfaces';
import { BurgerElement } from '../BurgerElement/BurgerElement';
import ConstructorItem from '../ConstructorItem/ConstructorItem';
import styles from './ConstructorList.module.css';

interface IDataListProps {
  dataList: IData[];
}

const ConstructorList = ({ dataList }: IDataListProps) => {
  const dataBun = dataList.filter((item) => item.type === 'bun');
  const dataNotBul = dataList.filter((item) => item.type !== 'bun');

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
