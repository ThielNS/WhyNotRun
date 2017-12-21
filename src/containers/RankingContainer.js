import { connect } from 'react-redux';
import Technologies from '../components/Technologies';
import { listTechs, listTechsPerPoints, listTechsPerPosts } from "../actions/tecnologiesAction";

const mapStateToProps = state => {
    return { itemsTechs: state.technologiesReducer };
};

const mapDispatchToProps = dispatch => ({
    listTechs: () => {
        return dispatch(listTechs());
    },
    listTechsPerPoints: () => {
        return dispatch(listTechsPerPoints());
    },
    listTechsPerPosts: () => {
        return dispatch(listTechsPerPosts());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Technologies);
