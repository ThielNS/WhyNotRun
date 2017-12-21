import { connect } from 'react-redux';
import Technologies from '../components/Technologies';
import { listTechs, listTechsPerPosts, listTechsPerPoints } from "../actions/tecnologiesAction";

const mapStateToProps = state => {
    return { itemsTechs: state.technologiesReducer };
};

const mapDispatchToProps = dispatch => ({
    listTechs: () => {
        return dispatch(listTechs());
    },
    listTechsPerPosts: () => {
        return dispatch(listTechsPerPosts());
    },
    listTechsPerPoints: () => {
        return dispatch(listTechsPerPoints());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Technologies);
