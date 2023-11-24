import Banner from './components/homePage/banner'
import Advantage01 from './components/homePage/Advantage01'
import ProjectsAbout from './components/homePage/ProjectsAbout'
import Around from './components/homePage/Around'

export default function Home() {
  return (
    <main className='w-full h-full relative'>
      <Banner />
      <Advantage01 />
      <ProjectsAbout />
      <Around />
    </main>
  )
}
