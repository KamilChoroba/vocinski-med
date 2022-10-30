import styles from './card.module.scss'

type CardProps = React.PropsWithChildren<{
  classNames: string[]
  text: string
  iconSrc: string
  imageSrc: string
  alt: string
}>

const Card: React.FC<CardProps> = ({
  classNames,
  text,
  iconSrc,
  imageSrc,
  alt,
}) => {
  return (
    <div className={classNames.join('')}>
      <div className={styles.wrapper}>
        <div className={styles.topLayer}>
          <div className={styles.text}>
            <img src={iconSrc} height={30} width={30} alt={alt} />
            <span>{text}</span>
          </div>
        </div>
        <picture>
          <source srcSet={`${imageSrc}`} type="image/jpeg" />
          <source srcSet={`${imageSrc}.webp`} type="image/webp" />
          <img
            className={styles.backgroundImage}
            src={`${imageSrc}`}
            alt={alt}
          />
        </picture>
      </div>
    </div>
  )
}

export default Card
