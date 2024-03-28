import Banner from '@/components/homeWidgets//Banner'
import Advantage01 from '@/components/homeWidgets/Advantage01'
import ProjectsAbout from '@/components/homeWidgets/ProjectsAbout'
import Around from '@/components/homeWidgets/Around'

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
