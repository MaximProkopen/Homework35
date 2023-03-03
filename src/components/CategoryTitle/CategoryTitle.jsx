import React from 'react'
import styles from './CategoryTitle.module.scss';

const CategoryTitle = ({ name }) => {
  return <h2 className={styles.category__title}>{name}</h2>;
}

export default CategoryTitle
