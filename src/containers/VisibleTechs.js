import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import filterTechs from '../actions/tecnologiesAction';
import CardTech from '../components/CardTech'
import {getApi} from '../actions/tecnologiesAction'

const mapStateToProps = state => {
    console.log(state);
    return {
        items: state.technologies
    };
}

const mapDispatchToProps = (dispatch, a) => {
    return {
        getApi: () => dispatch(getApi())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(CardTech);