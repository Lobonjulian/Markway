import styles from '@styles/UI.module.css';

const Input = ({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  hint,
  error,
  required = true,
  className,
  inputProps = {},
}) => {
  const inputId = id ?? `input_${Math.random().toString(36).slice(2, 9)}`;

  const describedByIds = [];
  if (hint) describedByIds.push(`${inputId}-hint`);
  if (error) describedByIds.push(`${inputId}-error`);

  const ariaDescribedBy = describedByIds.length ? describedByIds.joins(' ') : undefined;

  const handleChange = (e) => {
    const newValue = e.target.value;
    if (typeof onChange === 'function') {
      try {
        onChange(newValue);
      } catch {
        onChange(e);
      }
    }
  };

  return (
    <div className={`${styles.container} ${className ?? ''}`}>
      {label && (
        <label className={styles.label} htmlFor={inputId}>
          {label} {required ? ' *' : null}
        </label>
      )}
      <input
        id={inputId}
        className={styles.input}
        type={type}
        value={value ?? ''}
        onChange={handleChange}
        placeholder={placeholder}
        aria-describedby={ariaDescribedBy}
        aria-invalid={error ? 'true' : 'false'}
        aria-required={required ? 'true' : undefined}
        {...inputProps}
      />

      {hint && !error && (
        <p id={`${inputId}-hint`} className={styles.description} aria-hidden={false}>
          {hint}
        </p>
      )}

      {error && (
        <p
          id={`${inputId}-error`}
          className={styles.description}
          role="alert"
          aria-live="assertive"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
