// import { useContext, useEffect, useRef } from "react";
//
// export default function useOutsideClick(handler, listenCapturing = true) {
//   const ref = useRef();
//
//   useEffect(
//     function () {
//       function handleClick(e) {
//         if (ref.current && !ref.current.contains(e.target)) {
//           handler();
//         }
//       }
//       document.addEventListener("click", handleClick, listenCapturing);
//       return () => document.removeEventListener("click", handleClick);
//     },
//     [handler, listenCapturing],
//   );
//
//   return { ref };
// }

import { useEffect, useRef } from "react";

/**
 * Custom React hook that detects clicks outside of a referenced element.
 *
 * When a click occurs outside the attached element, the provided `handler`
 * function is executed. Commonly used for closing modals, dropdowns,
 * popovers, or tooltips.
 *
 * @param {() => void} handler - Function that runs when a click occurs outside the element.
 * @param {boolean} [listenCapturing=true] - Whether to attach the event listener during the capturing phase.
 *
 * @returns {{ ref: React.MutableRefObject<HTMLElement | null> }}
 * An object containing a `ref` that must be attached to the target element.
 *
 * @example
 * const { ref } = useOutsideClick(() => {
 *   setIsOpen(false);
 * });
 *
 * return <div ref={ref}>Dropdown Content</div>;
 */
export default function useOutsideClick(handler, listenCapturing = true) {
  /** @type {React.MutableRefObject<HTMLElement | null>} */
  const ref = useRef(null);

  useEffect(() => {
    /**
     * Handles document click events and determines whether
     * the click occurred outside the referenced element.
     *
     * @param {MouseEvent} e - The click event object.
     */
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    }

    document.addEventListener("click", handleClick, listenCapturing);

    return () => {
      document.removeEventListener("click", handleClick, listenCapturing);
    };
  }, [handler, listenCapturing]);

  return { ref };
}
