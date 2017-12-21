import React, { Component } from 'react';
import { Select, Spin } from 'antd';
import './addtechnology.scss';


class AddTechnologys extends Component {

  constructor(props) {
    super(props);
    this.state = {
      seekingOut: false
    };
  }

  renderOption() {

    let { technologies } = this.props;
    const Option = Select.Option;

    return technologies.map((item, index) => (
      <Option key={index} value={item.name}>{item.name}</Option>
    ));
  }

  componentDidMount() {
  }

  searchTechies = (value) => {
    console.log(value)
    const { seekingOut } = this.state;
    this.setState({ seekingOut: !seekingOut });
    this.props.listTechs(value);
  };

  render() {

    const { handleTechnologies } = this.props;
    const { seekingOut } = this.state;
    const loading = seekingOut ? <Spin size="small"/> : null;

    return (
      <Select
        mode="tags"
        className="add-technologys"
        placeholder="Referencie alguma tecnologia"
        onChange={handleTechnologies}
        notFoundContent={loading}
        combobox={true}
        onSearch={e => this.searchTechies(e)}
      >
        {this.renderOption()}
      </Select>
    );
  }
}

export default AddTechnologys;