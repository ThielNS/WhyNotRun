import { connect } from 'react-redux';
import Technologies from '../components/Technologies';
import { listTechs, listTechsPerPosts, listTechsPerPoints } from "../actions/tecnologiesAction";

const mapStateToProps = state => {
    return { itemsTechs: state.technologiesReducer };
};

const mapDispatchToProps = dispatch => ({
    listTechs: page => {
        return dispatch(listTechs(page));
    },
    listTechsPerPosts: page => {
        return dispatch(listTechsPerPosts(page));
    },
    listTechsPerPoints: page => {
        return dispatch(listTechsPerPoints(page));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Technologies);
