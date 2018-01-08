import React, { Component } from 'react';
import './search.scss';
import ResultSearch from "./ResultSearch/index";

class SearchForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textPlaceholder: [
        'Django Framework',
        'Angular JS',
        'JavaScript',
        'PHP = 2 Ovos + 3 Galinhas',
      ],
      textSearch: '',
    }
  }

  search = (e) => {
    const { value } = e.target;
    this.setState({ textSearch: value });
    this.props.searchPublication(value,1);
  };

  changeTextSearch = () => {
    this.setState({ textSearch: '' });
  };

  randPlaceholder = () => {
    const rand = Math.floor(Math.random() * 4);
    return `"${this.state.textPlaceholder[rand]}"`;
  };

  render() {

    const { textSearch } = this.state;
    const { resultPublication } = this.props;

      return (
      <div className="col-sm-6 row search">
        <form action="" method="get" className="search-form col-sm-12" autoComplete="off">
          <i className="fa fa-search"/>
          <input
            type="text"
            name="search"
            placeholder={this.randPlaceholder()}
            value={this.state.textSearch}
            onChange={this.search}
            onBlur={this.changeTextSearch}
          />
        </form>
        <ResultSearch textSearch={textSearch} resultSearch={resultPublication}/>
      </div>
    );
  }
}

export default SearchForm;