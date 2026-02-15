import styled from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;

import React, {
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import { HiXMark } from "react-icons/hi2";
import { createPortal } from "react-dom";
import useOutsideClick from "../hooks/useOutsideClick.js";

const ModalContext = createContext();

/**
 * Modal compound component root.
 *
 * Provides modal state management via React Context.
 * Controls which modal window is currently open using a name-based system.
 *
 * @component
 * @param {{ children: React.ReactNode }} props
 * @returns {JSX.Element}
 *
 * @example
 * <Modal>
 *   <Modal.Open opens="delete">
 *     <button>Open Delete Modal</button>
 *   </Modal.Open>
 *
 *   <Modal.Window name="delete">
 *     <DeleteConfirmation />
 *   </Modal.Window>
 * </Modal>
 */
function Modal({ children }) {
  /** @type {[string, React.Dispatch<React.SetStateAction<string>>]} */
  const [openName, setOpenName] = useState("");

  /**
   * Closes any open modal.
   * Sets the open modal name to an empty string.
   */
  const close = () => setOpenName("");

  /**
   * Opens a modal by name.
   * @type {React.Dispatch<React.SetStateAction<string>>}
   */
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

/**
 * Modal.Open component
 *
 * Acts as a trigger for opening a specific modal window.
 * Clones its child element and injects an `onClick` handler.
 *
 * @component
 * @param {{
 *   children: React.ReactElement,
 *   opens: string
 * }} props
 * @returns {JSX.Element}
 *
 * @example
 * <Modal.Open opens="edit">
 *   <button>Edit</button>
 * </Modal.Open>
 */
function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, {
    onClick: () => open(opensWindowName),
  });
}

/**
 * Modal.Window component
 *
 * Renders modal content conditionally based on the active modal name.
 * Uses React Portal to render the modal into `document.body`.
 * Automatically closes when clicking outside the modal.
 *
 * @component
 * @param {{
 *   children: React.ReactElement,
 *   name: string
 * }} props
 * @returns {JSX.Element | null}
 *
 * @example
 * <Modal.Window name="edit">
 *   <EditForm />
 * </Modal.Window>
 */
function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);

  // Close modal when clicking outside
  const { ref } = useOutsideClick(close);

  // Do not render if this modal is not the active one
  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={close}>
          <HiXMark />
        </Button>

        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </StyledModal>
    </Overlay>,
    document.body,
  );
}

/**
 * Compound component attachments.
 *
 * Allows usage like:
 * <Modal>
 *   <Modal.Open />
 *   <Modal.Window />
 * </Modal>
 */
Modal.Open = Open;
Modal.Window = Window;

export default Modal;
