import React, { Component } from 'react';
import { Select } from 'antd';
import './addtechnology.scss';


class AddTechnologys extends Component {

  renderOption() {

    let { technologies } = this.props;
    const Option = Select.Option;

    return technologies.map((item, index) => (
      <Option key={index} value={item.name}>{item.name}</Option>
    ));
  }

  componentDidMount() {
    this.props.listTechs();
  }

  render() {

    const { handleTecnologies } = this.props;

    return (
      <Select
        mode="tags"
        className="add-technologys"
        placeholder="Referencie alguma tecnologia"
        onChange={handleTecnologies}
      >
        {this.renderOption()}
      </Select>
    );
  }
}

export default AddTechnologys;