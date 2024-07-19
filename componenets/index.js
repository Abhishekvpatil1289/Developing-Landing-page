import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
// Add other components similarly

export default function Home() {
  return (
    <>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="Your description here" />
        <meta name="keywords" content="your, keywords, here" />
      </Head>
      <Navbar />
      <main>
        <Hero />
        {/* Add other components here */}
      </main>
    </>
  )
}
