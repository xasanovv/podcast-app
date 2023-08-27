import React from 'react';
import logo from '../../assets/svgs/hero/logo.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from '../../components/button/button';
import axios from 'axios';

export default function Header() {
  const [speakers, setSpeakers] = useState([]);

  const getSpeakers = async () => {
    await axios.get('http://localhost:3000/speakers').then((response) => {
      setSpeakers(response);
    })
  };

  useEffect(() => {
    getSpeakers();
  }, []);

  return (
    <>
      <header className="py-[28px] w-full">
        <nav className="flex justify-between gap-[20px] items-center bg-champagne-color">
          <div className="flex justify-between gap-[48px] md:gap-[124px] items-center">
            <div>
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
            <div>
              <ul className="flex gap-[32px] md:gap-[60px] font-[700]">
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center gap-[20px]">
            <Button
              text="RECENT EPISODES"
              classes="hover:bg-black hover:text-white hidden md:inline-block"
            />
            <Button text="SUBSCRIBE" classes="bg-black text-white" />
          </div>
        </nav>
      </header>
    </>
  );
}
