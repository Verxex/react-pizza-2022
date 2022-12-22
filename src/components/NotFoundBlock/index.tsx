import React from 'react';
import styles from './NotFoundBlock.module.scss';

export default function NotFondBlock() {
  return (
    <>
      <h1 className={styles.root}>
        <span>😕</span>
        <br />К сожалению, такой страницы нет
      </h1>
    </>
  );
}
