import { useEffect, useRef } from 'react';
import clsx from 'clsx';
import Nav from './Nav';
import HeaderActions from './HeaderActions';

import styles from '@styles/Layouts.module.css';

const MobileMenu = ({ id = 'mobile-menu', isOpen = false, onClose = () => {}, links = [] }) => {
  const containerRef = useRef(null);
  const previouslyFocusedRef = useRef(null);
  const bodyOverflowRef = useRef(null);
  const addedTabIndexRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!isOpen) return;

    // Guardar el foco previo y desactivar scroll del body
    previouslyFocusedRef.current = document.activeElement;
    bodyOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Seleccionamos los elementos focusables dentro del menú
    const focusableSelector =
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

    let focusables = [];
    const updateFocusables = () => {
      focusables = container ? Array.from(container.querySelectorAll(focusableSelector)) : [];
    };

    updateFocusables();

    if (focusables.length) {
      focusables[0].focus();
    } else if (container) {
      if (!container.hasAttribute('tabindex')) {
        container.setAttribute('tabindex', '-1');
        addedTabIndexRef.current = true;
      }
      container.focus();
    }

    function handleKey(e) {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === 'Tab') {
        updateFocusables();
        if (!focusables.length) {
          e.preventDefault();
          return;
        }

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener('keydown', handleKey);

    return () => {
      document.removeEventListener('keydown', handleKey);

      if (bodyOverflowRef.current != null) {
        document.body.style.overflow = bodyOverflowRef.current;
        bodyOverflowRef.current = null;
      }

      if (addedTabIndexRef.current && container.hasAttribute('tabindex')) {
        container.removeAttribute('tabindex');
        addedTabIndexRef.current = false;
      }

      if (
        previouslyFocusedRef.current &&
        typeof previouslyFocusedRef.current.focus === 'function'
      ) {
        try {
          previouslyFocusedRef.current.focus();
        } catch (error) {
          console.error('No se pudo restaurar el foco:', error);
        }
      }
      previouslyFocusedRef.current = null;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id={id}
      className={clsx(styles.mobileMenu, isOpen && styles.open)}
      role="presentation"
      aria-hidden={!isOpen}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <aside
        className={styles.mobileMenu__panel}
        ref={containerRef}
        aria-label="Menu móvil"
        role="dialog"
        aria-modal="true"
      >
        <Nav links={links} />

        <HeaderActions />
      </aside>
    </div>
  );
};

export default MobileMenu;
