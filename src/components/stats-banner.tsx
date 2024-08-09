import { SiteConfig, siteConfig, SocialMedia } from '@/config/site-config'
import React from 'react'

interface StatProps {
  item: SocialMedia
  follower: string
}

const Stat = ({ item, follower }: StatProps) => {
  return (
    <div
      key={item.name}
      className="w-[200px] relative flex flex-col justify-center items-center"
    >
      <item.icon size={'2.25rem'} />
      <span className="text-xl text-zinc-800 font-bold leading-tight tracking-tighter md:text-2xl lg:leading-[1.1] mt-4">
        {follower}
      </span>
      <span className='text-base text-zinc-500 mt-2'>Followers</span>
    </div>
  )
}

export default function StatsBanner() {
  return (
    <section className="flex justify-center items-center gap-10 py-6 px-4 border-t border-b w-full bg-zinc-100">
      {['+2K', '+6k', '+40', '+10'].map((followers, i) => (
        <Stat
          key={siteConfig.socialMedias[i].name}
          item={siteConfig.socialMedias[i]}
          follower={followers}
        />
      ))}
    </section>
  )
}
