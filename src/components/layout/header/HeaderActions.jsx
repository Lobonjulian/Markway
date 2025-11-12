import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@components/ui/Button';

import styles from '@styles/Layouts.module.css';

const HeaderActions = ({ isAuthenticated = false, onLogin, onSubmit, onProfile, onLogout }) => {
  const navigate = useNavigate();

  const handleLogin = useCallback(
    (e) => {
      if (e && typeof e.preventDefault === 'function') e.preventDefault();
      if (typeof onLogin === 'function') return onLogin();
      navigate('/login');
    },
    [navigate, onLogin]
  );

  const handleSubmit = useCallback(
    (e) => {
      if (e && typeof e.preventDefault === 'function') e.preventDefault();
      if (typeof onSubmit === 'function') return onSubmit();

      // Si no está autenticado, redirigimos a login con next
      if (!isAuthenticated) {
        const next = encodeURIComponent('/submit');
        navigate(`/login?next=${next}`);
        return;
      }

      navigate('/submit');
    },
    [navigate, isAuthenticated, onSubmit]
  );

  const handleProfile = useCallback(
    (e) => {
      if (e && typeof e.preventDefault === 'function') e.preventDefault();
      if (typeof onProfile === 'function') return onProfile();
      navigate('/profile');
    },
    [navigate, onProfile]
  );

  const handleLogout = useCallback(
    (e) => {
      if (e && typeof e.preventDefault === 'function') e.preventDefault();
      if (typeof onLogout === 'function') return onLogout();
      navigate('/logout');
    },
    [navigate, onLogout]
  );

  return (
    <div className={styles.actions} role="group" aria-label="Acciones de usuario">
      {!isAuthenticated ? (
        <>
          <Button variant="ghost" onClick={handleLogin} aria-label="Entrar">
            Entrar
          </Button>

          <Button variant="primary" onClick={handleSubmit} aria-label="Publicar">
            Publicar
          </Button>
        </>
      ) : (
        <>
          <Button variant="secundary" onClick={handleProfile} aria-label="Perfil">
            Perfil
          </Button>

          <Button variant="primary" onClick={handleSubmit} aria-label="Publicar">
            Publicar
          </Button>

          <Button variant="ghost" onClick={handleLogout} aria-label="Cerrar sesión">
            Cerrar sesión
          </Button>
        </>
      )}
    </div>
  );
};

export default HeaderActions;
