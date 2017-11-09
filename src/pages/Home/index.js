import React from 'react';
import Navbar from "../../components/Navbar";
import Publication from "../../containers/postContainer";
import Feed from "../../containers/FeedContainer";

const Home = () => (
  <main>
    <Navbar token=""/>
    <Publication/>
    <Feed/>
  </main>
);

export default Home;