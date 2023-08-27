import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import { EpisodePropsType } from '../../../types/episodeType';

const Episode: React.FC<{ episode: EpisodePropsType }> = ({ episode }) => {
  return (
    <div className="episode1 relative w-full h-full">
      <div className="episode__content "></div>

      <div
        className="episode w-full h-full relative z-[10] border-black border-2 hover:[&>.title>*]:text-orange-color cursor-pointer rounded-[12px] bg-white p-4 flex gap-5 items-center justify-center"
        key={episode.id}
      >
        <div className="flex h-full items-start justify-between flex-col">
          <div className="relative rounded-xl overflow-hidden">
            <img width={166} height={166} src={episode.imgUrl} alt="" />
            <div className="right-0 top-0 flex absolute items-center gap-[6px] text-white [&>a:hover]:text-orange-color p-[10px] text-[12px] ">
              <a href={episode.socials.googlePodcast}>
                <Icon icon="mdi:google-podcast" />
              </a>
              <a href={episode.socials.spotify}>
                <Icon icon="mdi:spotify" />
              </a>
              <a href={episode.socials.youtube}>
                <Icon icon="mdi:youtube" />
              </a>
            </div>
          </div>
          <div className="flex items-center gap-[6px] mt-5 ">
            {episode.tags.map((tag: string) => (
              <span
                key={episode.id}
                className=" text-[12px] px-[12px] whitespace-nowrap py-[6px] border border-grey-color rounded-md "
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div>
          <div>
            <p className="title">
              <span className="text-[16px] font-bold ">Eps.{episode.id}</span>
              <p className="text-[23px] font-bold">{episode.title}</p>
            </p>
            <hr className="mt-[15px] mb-[10px] " />
            <p className="text-sm text-grey-color "> {episode.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episode;
