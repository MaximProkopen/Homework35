import classNames from 'classnames';
import styles from './Button.module.scss';

const Button = ({ bannerBtn }) => {
  return (
    <div className={styles.products_bottom}>
      <a
        href="/"
        className={classNames(styles.btn, styles.btn_outline_primary)}
      >
        {bannerBtn}
      </a>
    </div>
  )
}

export default Button