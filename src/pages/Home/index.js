import React from 'react';
import Navbar from "../../components/Navbar";
import Publication from "../../components/publication";
import Feed from "../../containers/FeedContainer";

const Home = () => (
  <main>
    <Navbar/>
    <Publication/>
    <Feed/>
  </main>
);

export default Home;