import Card from '../card'
import styles from './content.module.scss'

const Content = () => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.hero}>
        <picture>
          <source
            srcSet="/images/flowers-m.jpg"
            type="image/jpeg"
            media="(max-width: 800px)"
          />
          <source
            srcSet="/images/flowers-m.jpg.webp"
            type="image/webp"
            media="(max-width: 800px)"
          />
          <source
            srcSet="/images/flowers-w.jpg"
            type="image/jpeg"
            media="(min-width: 800px)"
          />
          <source
            srcSet="/images/flowers-w.jpg.webp"
            type="image/webp"
            media="(min-width: 800px)"
          />
          <img
            className={styles.heroBackground}
            src="/images/flowers.jpg"
            alt="Flowers"
          />
        </picture>
      </div>
      <Card
        classNames={[styles.cvjetni]}
        text="Cvjetni"
        iconSrc="/icons/flower.svg"
        imageSrc="/images/cvjetni.jpg"
        alt="Cvjetni"
      />
      <Card
        classNames={[styles.bagremov]}
        text="Bagremov"
        iconSrc="/icons/tree.svg"
        imageSrc="/images/bagremov.jpg"
        alt="Bagremov"
      />
      <Card
        classNames={[styles.kestenov]}
        text="Kestenov"
        iconSrc="/icons/chestnut.svg"
        imageSrc="/images/kestenov.jpg"
        alt="Kestenov"
      />
      <div className={[styles.bagremov, styles.box].join(' ')}>bagremov</div>
      <div className={[styles.kestenov, styles.box].join(' ')}>kestenov</div>
    </main>
  )
}

export default Content
