import { connect } from 'react-redux';
import { listTechs } from "../actions/tecnologiesAction";
import AddTechnologys from '../components/PublicationForm/AddTechnologys';

const mapStateToProps = state => {
  return ({ technologies: state.technologiesReducer });
};

const mapDispatchToProps = dispatch => ({
  listTechs: text => {
    dispatch(listTechs(text));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTechnologys);
