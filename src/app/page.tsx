import Contact from '@/components/contact'
import Header from '@/components/header'
import Homepage from '@/components/homepage'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import WhoAmI from '@/components/who_section'
import Image from 'next/image'
import { useRef } from 'react'


export default function Home() {
  // const targetRef = useRef(null);

  // const handleClick = () => {
  //   window.scrollTo({
  //     top: targetRef.current?.offsetTop || 0,
  //     behavior: 'smooth' // Optional for smooth scrolling
  //   });
  // };

  return (
    <main className='h-full font-mono bg-neutral-950'>
      <div>
        <Header/>
        <Homepage/>
        <WhoAmI/>
        <Skills/>
        <Projects/>
        {/* <Aspirations/> */}
        <Contact/>
      </div>
    </main>
  )
}
