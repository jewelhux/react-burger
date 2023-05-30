import React, { ReactElement, ReactNode } from 'react';
import ModalOverlay from './ModalOverlay/ModalOverlay';
import styles from './Modal.module.css';

interface IModalProps {
  children: ReactNode;
  title: string;
  onClose: () => void;
}

const Modal = ({ children, title, onClose }: IModalProps): ReactElement => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.contentHeader}>
          <h2>{title}</h2>
          <div className={styles.closeButton} onClick={onClose}></div>
        </div>
        {children}
      </div>
      <ModalOverlay></ModalOverlay>
    </>
  );
};

export default Modal;
