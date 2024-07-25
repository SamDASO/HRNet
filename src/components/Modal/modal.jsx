
import { useEffect } from "react";
import styles from "./modal.module.scss";

/**
 * Modal component that renders its children inside a modal dialog. It's disable the overflow in the body when active.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.isOpen - Determines if the modal is open.
 * @param {React.ReactNode} props.children - The content to be displayed inside the modal.
 * @returns {JSX.Element|null} The rendered modal component or null if not open.
*/

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



export default Modal;