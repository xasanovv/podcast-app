import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js';


const Podcast:React.FC<any> = ({podcast}) => {
  return (
    <div className="podcast__content relative w-[373px] h-[373px] rounded-2xl border p-5 flex flex-col justify-between items-end ">
      <img
        className="absolute -z-10 top-0 left-0 rounded-2xl grayscale w-full h-full object-cover"
        src={podcast.imgUrl}
        alt=""
      />
      <div className="right-0 top-0 flex items-center gap-[10px] text-white text-[24px] ">
        <a href={podcast.socials.googlePodcast}>
          <Icon icon="mdi:google-podcast" />
        </a>
        <a href={podcast.socials.spotify}>
          <Icon icon="mdi:spotify" />
        </a>
        <a href={podcast.socials.googlePodcast}>
          <Icon icon="mdi:youtube" />
        </a>
      </div>
      <p className="left-0 bottom-0 text-[#81ADC8] font-bold text-[37px]">
        {podcast.title}
      </p>
    </div>
  );
}

export default Podcast;