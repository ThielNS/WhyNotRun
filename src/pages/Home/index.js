import React from 'react';
import Navbar from "../../components/Navbar";
import Publication from "../../components/publication";
import Feed from "../../components/Feed/index";

const Home = () => (
  <main>
    <Navbar/>
    <Publication/>
    <Feed/>
  </main>
);

export default Home;