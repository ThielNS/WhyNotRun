import React from 'react';
import PublicationFormContainer from "../../containers/publicationFormContainer";
import Feed from "../../containers/feedContainer";

const Home = () => (
  <main>
    {console.log(localStorage.getItem('userToken'))}
    <PublicationFormContainer/>
    <Feed/>
  </main>
);

export default Home;