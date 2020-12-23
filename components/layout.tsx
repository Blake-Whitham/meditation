import Head from 'next/head'
import styles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const title = 'take a moment and reflect'
export const siteTitle = 'meditation'

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode,
  home?: boolean,
}) {
  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="description"
          content="Take a brief minute to reset and center yourself"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width, height=device-height" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/meditation.png"
              className={`${utilStyles.borderCircle}`}
              alt={title}
            />
            <h1 className={utilStyles.heading2Xl}>{title}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.png"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={title}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>{title}</h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
