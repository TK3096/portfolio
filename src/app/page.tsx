import { DesktopMenu } from '@/components/home/DesktopMenu'
import { MobileMenu } from '@/components/home/MobileMenu'

const HomePage = () => {
  return (
    <main className='h-full'>
      <MobileMenu />
      <DesktopMenu />
    </main>
  )
}

export default HomePage
