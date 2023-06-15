import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useRef } from 'react';
import {
  moveIngredientsCurrentBurger,
  deleteIngredientsCurrentBurger,
} from '../../../services/slice/allIngredientsCurrentBurgerSlice';
import { useAppDispatch } from '../../../services/store';
import { ITEM_DND_TYPE } from '../../../utils/const';
import { DragItem, IExtData } from '../../../utils/interfaces';
import { BurgerElement } from '../BurgerElement/BurgerElement';
import { useDrag, useDrop } from 'react-dnd';
import type { Identifier, XYCoord } from 'dnd-core';
import styles from './ConstructorItem.module.css';

interface IDataItemProps {
  dataItem: IExtData;
  indexElement: number;
}

const ConstructorItem = ({ dataItem, indexElement }: IDataItemProps) => {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const [, drop] = useDrop<DragItem, void, { handlerId: Identifier | null }>({
    accept: ITEM_DND_TYPE.BOX,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = indexElement;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      item.index = hoverIndex;
      dispatch(moveIngredientsCurrentBurger({ fromIndex: dragIndex, toIndex: hoverIndex }));
    },
  });

  const [, drag] = useDrag({
    type: ITEM_DND_TYPE.BOX,
    item: () => {
      return { index: indexElement };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));
  return (
    <div className={styles.mainContainer} ref={ref}>
      <div className={styles.dragIcon}>
        <DragIcon type="primary" />
      </div>
      <BurgerElement
        text={dataItem.name}
        price={dataItem.price}
        thumbnail={dataItem.image}
        handleClose={() => dispatch(deleteIngredientsCurrentBurger(dataItem))}
      />
    </div>
  );
};

export default ConstructorItem;
