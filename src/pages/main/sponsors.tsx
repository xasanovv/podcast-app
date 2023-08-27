import React from 'react'
import Title from '../../components/Title/title'
import data from '../../../db';
import Sponsor from './sponsor';

const Sponsors = () => {
  return (
    <div className="container relative py-[140px] ">
      <Title
        text="Become our sponsor"
        subtitle="Get exclusive episodes, merch and more"
      />
      <div className="pt-[100px] relative flex gap-5 flex-col lg:flex-row">
        <div className='absolute -right-2 lg:-right-20 top-8 -z-100'>
          <svg
            width="147"
            height="153"
            viewBox="0 0 147 153"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M51.9887 4.87671C53.3442 -0.705841 61.4555 -0.155127 62.044 5.5594L65.6395 40.4751C66.0381 44.3452 70.4411 46.3701 73.6387 44.1538L109.872 19.0398C114.413 15.8926 120.026 21.1847 117.152 25.9028L99.5972 54.7149C97.7956 57.672 99.3924 61.5272 102.757 62.3443L142.68 72.0374C147.588 73.2291 147.98 80.0588 143.24 81.8045L102.008 96.991C98.8376 98.1586 97.651 102.025 99.6203 104.77L115.053 126.281C118.301 130.807 112.996 136.527 108.238 133.628L80.2851 116.597C77.328 114.796 73.4728 116.392 72.6557 119.757L65.7196 148.325C64.3741 153.866 56.3387 153.379 55.6724 147.716L50.7185 105.607C50.246 101.591 45.5186 99.6866 42.3941 102.254L15.36 124.467C10.8054 128.21 4.57887 122.546 7.87397 117.658L33.0832 80.2626C35.4422 76.7633 32.7859 72.0742 28.5717 72.2984L5.65257 73.5178C-0.451023 73.8426 -1.87764 65.1227 4.0112 63.4854L23.5438 58.0546C27.1391 57.055 28.4874 52.6655 26.073 49.82L8.79029 29.4511C5.03411 25.0242 10.3917 18.7556 15.3497 21.7763L37.7149 35.4028C40.672 37.2044 44.5272 35.6076 45.3443 32.2426L51.9887 4.87671Z"
              fill="black"
            />
          </svg>
        </div>
        {data.sponsors.map((sponsor) => {
          return <Sponsor key={sponsor.id} sponsor={sponsor} />;
        })}
      </div>
    </div>
  );
}

export default Sponsors