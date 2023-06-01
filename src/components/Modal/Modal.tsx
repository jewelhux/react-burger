import React, { ReactElement, ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ModalOverlay from './ModalOverlay/ModalOverlay';
import styles from './Modal.module.css';

interface IModalProps {
  children: ReactNode;
  title: string;
  onClose: () => void;
}

const Modal = ({ children, title, onClose }: IModalProps): ReactElement => {
  const modalRoot = document.getElementById('react-modals') as HTMLElement;

  useEffect(() => {
    const onClickEsc = (e: { key: string }) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onClickEsc);
    return () => {
      document.removeEventListener('keydown', onClickEsc);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <>
      <div className={styles.content}>
        <div className={styles.contentHeader}>
          <h2>{title}</h2>
          <div className={styles.closeButton} onClick={onClose}></div>
        </div>
        {children}
      </div>
      <ModalOverlay onClose={onClose} />
    </>,
    modalRoot
  );
};

export default Modal;
