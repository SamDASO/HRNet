
import { useEffect, useRef } from "react";
import styles from "./modal.module.scss";

/**
 * Modal component that renders its children inside a modal dialog. It's disable the overflow in the body when active.
 *
 * @param {Object} props - The component props.
 * @param {string} props.style - The class to style the dialog part of the modal. with ::backdrop it's possible to style the background.
 * @param {boolean} props.isOpen - Determines if the modal is open.
 * @param {boolean} props.onClose - The callback function to close the modal.
 * @param {React.ReactNode} props.children - The content to be displayed inside the modal.
 * @returns {JSX.Element|null} The rendered modal component or null if not open.
*/

function Modal({style, isOpen, onClose, children}) {
  const dialogValue = useRef(null);

  useEffect(() => {
    const dialogElement = dialogValue.current;

    if (dialogElement) {
      if (isOpen) {
        dialogElement.showModal();
        document.body.style.overflow = 'hidden';
      } else {
        dialogElement.close();
        document.body.style.overflow = '';
      }

      const handleClose = () => {
        if (onClose) {
          onClose();
        }
        document.body.style.overflow = '';
      };

      dialogElement.addEventListener('close', handleClose);

      return () => {
        dialogElement.removeEventListener('close', handleClose);
        document.body.style.overflow = '';
      };
    }
  }, [isOpen, onClose]);

  const dialogClass = style || styles.dialogDefault;
  
  if (!isOpen) {
    return null;
  }

  return (
      <dialog className={dialogClass} ref={dialogValue}>
        {children}
      </dialog>
  );
}



export default Modal;