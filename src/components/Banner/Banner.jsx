import styles from './Banner.module.scss';
import classNames from 'classnames';

const Banner = (props) => {
  const { imgBanner, titleBanner, btnBanner } = props;
  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.banner__wrapper}>
          <img src={imgBanner} alt="" />
          <div className={styles.banner__overlay}>
            <div>
              <h1 className={styles.banner__title}>{titleBanner}</h1>
              <a href="/" className={classNames(styles.btn, styles.btn_dark)}>
                {btnBanner}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner;