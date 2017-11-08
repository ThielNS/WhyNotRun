import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <form action="" method="get" className="form-search">
        <i className="fa fa-search"></i>
        <input type="text" name="search" placeholder="Procurar..."/>
      </form>
    );
  }
}

export default Search;