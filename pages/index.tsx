import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next'

import { useState } from 'react';

import { Breather } from '../components/breather'
import { Intro } from '../components/intro'

import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date'

import utilStyles from '../styles/utils.module.css'

import { getSortedPostsData } from '../lib/posts'




export default function Home() {
  const [size, setSize] = useState(500);
  const [flow, setFlow] = useState(1);
  const [countDown, setCountDown] = useState(10);
  const [trigger, setTrigger] = useState(true);

  // const timer:Function = () => {

  // }
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width, height=device-height" />
      </Head>
      <section className={utilStyles.headingMd}>
        <Intro />
      </section>
    </Layout>
  )
}


//Server side api data fetching | builds bundle with data fetched at request time
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     }
//   }
// }


// Client side rendering for user specific data | renders all but fetched data server side
// import useSWR from 'swr'

// function Profile() {
//   const { data, error } = useSWR('/api/user', fetch)

//   if (error) return <div>failed to load</div>
//   if (!data) return <div>loading...</div>
//   return <div>hello {data.name}!</div>
// }

// only runs on the server | not included in the bundle for this page
//SSR
// export async function getStaticProps() {
  // export const getStaticProps: GetStaticProps = async () => {
  //   const allPostsData = getSortedPostsData()
  //   return {
  //     props: {
  //       allPostsData
  //     }
  //   }
  // }