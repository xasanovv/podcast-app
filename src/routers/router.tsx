import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/layout';
import Main from '../pages/main/main';
import About from '../pages/about/about';
import Blog from '../pages/blog/blog';

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Main />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="blog" element={<Blog />}></Route>
        </Route>
      </Routes>
    </>
  );
}
