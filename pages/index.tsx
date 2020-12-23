import Head from 'next/head';

import { Story } from '../components/story'

import Layout, { siteTitle } from '../components/layout'



export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width, height=device-height" />
      </Head>
      <section>
        <Story />
      </section>
    </Layout>
  )
}
