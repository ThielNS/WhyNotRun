import { connect } from 'react-redux';
import Technologies from '../components/Technologies';
import { listTechs } from "../actions/tecnologiesAction";

const mapStateToProps = state => {
    return { itemsTechs: state.technologiesReducer };
    
};

const mapDispatchToProps = dispatch => ({
    listTechs: () => {
        return dispatch(listTechs());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Technologies);
