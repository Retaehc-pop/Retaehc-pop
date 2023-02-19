import Head from 'next/head'
import Image from 'next/image'
import { HypertextLoop } from '../components/hypertextloop'
export default function Page(){
  return (
    <>
    <main>
      <HypertextLoop texts={["Pi"]} delay={3000}>
        Main Page
      </HypertextLoop>
    </main>
    </>
  )
}