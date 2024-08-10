import AdPicture from '@/components/ad-picture'
import AdvantageList from '@/components/advantage-list'
import CurveSection from '@/components/curve-section'
import Footer from '@/components/footer'
import HeroSection from '@/components/hero-section'
import ShowCaseVideos from '@/components/show-case-videos'
import StatsBanner from '@/components/stats-banner'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <HeroSection />
      <CurveSection>
        <StatsBanner />
        <ShowCaseVideos />

        {/* <AdPicture /> */}
        <AdvantageList />
      </CurveSection>

      <Footer />
    </main>
  )
}
