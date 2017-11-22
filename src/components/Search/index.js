import React, { Component } from 'react';
import './search.scss';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textPlaceholder: [
        'Django Framework',
        'Angular JS',
        'JavaScript',
        'PHP = 2 Ovos + 3 Galinhas',
      ],
    }
  }

  render() {

    const rand = Math.floor(Math.random() * 4);

    return (
      <form action="" method="get" className="form-search col-sm-6">
        <i className="fa fa-search"></i>
        <input type="text" name="search" placeholder={`"${this.state.textPlaceholder[rand]}"`}/>
      </form>
    );
  }
}

export default Search;