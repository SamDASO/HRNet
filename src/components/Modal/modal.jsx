import PropTypes from "prop-types";
import { useEffect } from "react";
import styles from "./modal.module.scss";

function Modal({isOpen, children}) {

    useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
    
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, [isOpen]);
    
      if (!isOpen) {
        return null;
      }

    return (
        <div className={styles.overlay}>
          <div className={styles.modal}>
              {children}
          </div>
        </div>
      );
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
}

export default Modal;