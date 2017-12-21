import { connect } from "react-redux";
import { searchPublication } from "../actions/searchPublicationAction";
import SearchForm from "../components/SearchForm";

const mapStateToProps = state => {
  return {
    resultPublication: state.searchPublicationReducer
  }
};

const mapDispatchToProps = dispatch => {
  return {
    searchPublication: (text, page) => {
      return dispatch(searchPublication(text, page));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);