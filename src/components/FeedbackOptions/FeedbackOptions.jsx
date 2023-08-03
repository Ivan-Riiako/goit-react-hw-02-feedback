import React from 'react';
import styles from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={styles.list_buttons}>
      {Object.keys(options).map(option => (
        <li>
          <button onClick={() => onLeaveFeedback(option)}>
            {/* {`${option[0].toUpperCase() + option.slice(1)}`} */}
            {option.replace(option[0],option[0].toUpperCase())}
          </button>
        </li>
      ))}
    </ul>
  );
};
