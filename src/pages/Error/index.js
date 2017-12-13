import React from 'react';

const ErrorPage = (props) => (
  <main className="error">
    {console.log(props)}
    <div className="container row -align-center -direct-column">
      <h2>ERROR!</h2>
      <small>Page not found!</small>
    </div>
  </main>
);

export default ErrorPage;