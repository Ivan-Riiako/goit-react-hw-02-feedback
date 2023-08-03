import React from 'react';
 import styles from './Statistics.module.css';

export const Statistics=( {good,netural,bad,total,positivePercentage})=>{
return (
  <ul className={styles.list_statistic}>
    <li>Good: {good}</li>
    <li>Netural: {netural}</li>
    <li>Bad: {bad}</li>
    <li>Total: {total}</li>
    <li>Positive feedback: {positivePercentage}%</li>
  </ul>
);

}