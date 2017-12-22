import { connect } from 'react-redux';
import { searchTechs } from "../actions/tecnologiesAction";
import AddTechnologys from '../components/PublicationForm/AddTechnologys';

const mapStateToProps = state => {
  return ({ technologies: state.technologiesReducer });
};

const mapDispatchToProps = dispatch => ({
  searchTechs: text => {
    dispatch(searchTechs(text));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTechnologys);
