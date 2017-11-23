import React, { Component } from 'react';
import './search.scss';
import { Link } from "react-router-dom";
import TagTech from "../TagTech/index";
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
      resultSearch: [
        {
          title: 'Redux é uma complexidade desnecessaura',
          tags: [
            {
              name: 'React JS',
            },
            {
              name: 'react-redux',
            },
          ],
        },
        {
          title: 'Django é uma framework?',
          tags: [
            {
              name: 'Python',
            },
            {
              name: 'Django',
            },
            {
              name: 'Framework',
            },
          ],
        },
        {
          title: 'Por que o Material Design não tem acessibilidade?',
          tags: [
            {
              name: 'JavaScript',
            },
            {
              name: 'Angular JS',
            },
            {
              name: 'JS',
            },
            {
              name: 'JS',
            },
            {
              name: 'JS',
            },
          ],
        },
      ],
      textSearch: '',
    }
  }

  search = (e) => {
    this.setState({ textSearch: e.target.value });
  };

  changeTextSearch = () => {
    this.setState({ textSearch: '' });
  };

  render() {

    const rand = Math.floor(Math.random() * 4);
    const { resultSearch, textSearch } = this.state;

      return (
      <div className="col-sm-6 row search">
        <form action="" method="get" className="search-form col-sm-12" autoComplete="off">
          <i className="fa fa-search"/>
          <input
            type="text"
            name="search"
            placeholder={`"${this.state.textPlaceholder[rand]}"`}
            value={this.state.textSearch}
            onChange={this.search}
            onBlur={this.changeTextSearch}
          />
        </form>
        <ResultSearch textSearch={textSearch} resultSearch={resultSearch}/>
      </div>
    );
  }
}

export default SearchForm;