import Banner from './components/homePage/banner'
import Advantage01 from './components/homePage/Advantage01'
import ProjectsAbout from './components/homePage/ProjectsAbout'
// import Image from 'next/image'
// import backgroundImage from '@/images/homePage/background-1-1_yppyx6.png'

export default function Home() {
  return (
    <main className='w-full h-full relative'>
      <Banner />
      <Advantage01 />
      <ProjectsAbout />
    </main>
  )
}
