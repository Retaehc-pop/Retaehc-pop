import Head from 'next/head'
import Image from 'next/image'
import { HypertextLoop } from '../components/hypertextloop'
import PageBanner from '../components/pageBanner'
const Page = () => {
  return (
    <>
    <main>
      <PageBanner>Home</PageBanner>
      <HypertextLoop texts={["Pi"]} delay={3000}>
        Main Page
      </HypertextLoop>
    </main>
    </>
  )
}

export default Page