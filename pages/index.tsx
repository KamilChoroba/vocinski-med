import Head from 'next/head'
import Footer from '../components/footer'
import Header from '../components/header'
import Content from '../components/content'
import styles from '../styles/Home.module.scss'

const Home = () => {
  const siteTitle = 'Voćinski Med'

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="og:title" content={siteTitle} />
          <title>{siteTitle}</title>
        </Head>
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  )
}

export default Home
