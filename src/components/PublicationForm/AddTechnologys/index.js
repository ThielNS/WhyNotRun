import React, { Component } from 'react';
import ListTechnologys from "./ListTechnologys";
import './addtechnology.scss';

class AddTechnologys extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      list: [
        { name: 'React JS' },
        { name: 'Angular JS' },
        { name: 'Vue JS' },
        { name: 'Django' },
        { name: 'Framework' },
        { name: 'PHP' },
        { name: 'JavaScript' },
      ]
    }
  }

  changeText = (e) => {
    this.setState({ text: e.target.value })
  };

  render() {

    const { text, list } = this.state;

    return (
      <div className="add-technologys">
        <input
          type="text"
          className="col-sm-12"
          placeholder="Relacione a uma ou mais tecnologias"
          onChange={this.changeText}
          value={text}
        />
        <ListTechnologys list={list} text={text} />
      </div>
    );
  }
}

export default AddTechnologys;