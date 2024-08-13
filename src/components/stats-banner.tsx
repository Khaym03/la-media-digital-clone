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
      className=" relative flex flex-col justify-center items-center"
    >
      <item.icon className='text-xl' />
      <span className="max-sm:text-base text-xl text-zinc-800 font-bold leading-tight tracking-tighter md:text-2xl lg:leading-[1.1] mt-1 md:mt-4">
        {follower}
      </span>
      <span className='max-sm:text-sm text-base text-zinc-500 mt-1 md:mt-2'>Followers</span>
    </div>
  )
}

export default function StatsBanner() {
  return (
    <section className="flex justify-center items-center max-sm:gap-4 gap-10 pb-6 px-4 w-full overflow-hidden">
      {['+6K', '+100', '+2k', '+40'].map((followers, i) => (
        <Stat
          key={siteConfig.socialMedias[i].name}
          item={siteConfig.socialMedias[i]}
          follower={followers}
        />
      ))}
    </section>
  )
}
