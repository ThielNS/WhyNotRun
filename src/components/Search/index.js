import React, { Component } from 'react';
import './search.scss';

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