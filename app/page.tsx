import {HeroSection ,
        Footer,
        SubjectHeader,
        ContentCard
} from "@/components"
import Head from 'next/head';
export const metadata = {
  title: "CERH",
  description: "Collection of civil engineering study material",
}

export default function Home() {
  return (
  <div className="scroll-smooth">
    <Head>
    <link rel="shortcut icon" href="/file.png" />
    </Head>
    <HeroSection />
    <SubjectHeader/>
    <ContentCard/>
    <Footer/>
    
  </div>
  )
}
