import AdPicture from '@/components/ad-picture'
import AdvantageList from '@/components/advantage-list'
import CurveSection from '@/components/curve-section'
import Footer from '@/components/footer'
import HeroSection from '@/components/hero-section'
import ShowCaseVideos from '@/components/show-case-videos'
import StatsBanner from '@/components/stats-banner'
import GradientComponent from '@/components/gradient-component'

export default function Home() {
  return (
    <div className='max-w-5xl'>
      <GradientComponent />

      <main className="flex min-h-screen flex-col items-center justify-between relative ">
        <HeroSection />
        <CurveSection>
          <StatsBanner />
          <ShowCaseVideos />

          <AdPicture />
          <AdvantageList />
        </CurveSection>

      
      </main>
    </div>
  )
}
