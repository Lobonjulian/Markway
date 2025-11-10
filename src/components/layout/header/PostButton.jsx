import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '@styles/Components.module.css';
import Button from '@components/ui/Button';

const PostButton = () => {
  const navigate = useNavigate();

  const handleLogin = useCallback(
    (e) => {
      e.preventDefault();
      navigate('/login');
    },
    [navigate]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      navigate('/submit');
    },
    [navigate]
  );

  return (
    <div className={styles.actions}>
      <Button variant="ghost" onClick={handleLogin} aria-label="Entrar">
        Entrar
      </Button>

      <Button variant="primary" onClick={handleSubmit} aria-label="Publicar">
        Publicar
      </Button>
    </div>
  );
};

export default PostButton;
