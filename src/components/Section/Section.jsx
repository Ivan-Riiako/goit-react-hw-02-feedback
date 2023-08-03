import styles from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <>
      <h1 className={styles.heading}>{title}</h1>
      {children}
    </>
  );
};
