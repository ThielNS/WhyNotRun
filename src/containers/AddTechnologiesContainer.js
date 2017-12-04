import React from 'react';
import { connect } from 'react-redux';
import { listTechs } from "../actions/tecnologiesAction";
import AddTechnologys from '../components/PublicationForm/AddTechnologys';

const mapStateToProps = state => {
  return ({ technologies: state.technologiesReducer });
};

const mapDispatchToProps = dispatch => ({
  listTechs: () => {
    dispatch(listTechs());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTechnologys);
