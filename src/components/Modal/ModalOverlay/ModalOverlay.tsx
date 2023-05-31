import React from 'react';
import styles from './ModalOverlay.module.css';

interface IModalOverlayProps {
  onClose: () => void;
}

const ModalOverlay = ({ onClose }: IModalOverlayProps) => {
  return <div className={styles.popup} onClick={onClose} />;
};

export default ModalOverlay;
