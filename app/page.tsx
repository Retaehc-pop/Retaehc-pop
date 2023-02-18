import Head from 'next/head'
import Image from 'next/image'
import { HypertextLoop } from '../components/hypertextloop'
export default function Page(){
  return (
    <>
    <main>
      <HypertextLoop texts={["Pingping","papop","kiki","AI OODDDDDDDDDDD","GOODLUCK","i dont know what to add"]} delay={3000}>
        Main Page
      </HypertextLoop>
    </main>
    </>
  )
}