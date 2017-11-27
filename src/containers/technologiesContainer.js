import React from 'react';
import { getApi } from '../actions/tecnologiesAction'
import { bindActionCreators } from 'redux';
import { filterTechs } from '../actions/tecnologiesAction';
import connect from 'react-redux';
import Ranking from '../components/Technologies'

const mapStateToProps = state => {
    return { itemsTech: state.technologiesReducer };
}

const mapDispatchToProps = (dispatch, a) => {

    return {
        filterTechs: () => dispatch(filterTechs())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ranking);