import { connect } from "react-redux";
import SearchForm from "../components/SearchForm/index";

const mapStateToProps = state => {
  return {
    resultPublication: state.searchPublicationReducer;
  }
};

const mapDispatchToProps = dispatch => {
  listResult
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);