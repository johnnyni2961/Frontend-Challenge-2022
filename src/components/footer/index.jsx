import styles from './footer.module.css';

export const Footer = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Please Notice me...{' '}
        {/* TODO: refactor link to ui-component */}
        <a
          className={styles.link}
          href="https://naumchik.me/"
          rel="noopener noreferrer"
          target="_blank">
          See you later ~ Johnny N.
        </a>
      </p>
    </div>
  );
};
