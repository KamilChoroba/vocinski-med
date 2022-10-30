import styles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.mibpg}>MIBPG 60169610</div>
      <div className={styles.opg}>OPG Stevo Brezanovic</div>
      <div className={styles.broj}>
        <a href="tel:+38598439721">Broj. 098 439 721</a>
      </div>
    </footer>
  )
}

export default Footer
