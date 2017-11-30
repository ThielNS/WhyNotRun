import React, { Component } from 'react';
import TechnologyPodium from './podiumTechs'
import Navbar from './navbar';
import BottomTechnologies from './bottomTechnologies';
import Pagination from '../Pagination';
import PropTypes from 'prop-types';

import './style.scss'

class Technologies extends Component {
    constructor(props) {
        super(props);

        this.state = {

            currentPage: 1,
            techsPerPage: 3
        };

        this.handleClick = this.handleClick.bind(this);
        //this.componentDidMount = this.componentDidMount.bind(this);
    }

    handleClick(e) {
        this.setState({
            currentPage: Number(e.target.id)
        });
    }
    componentDidMount() {
        this.props
            .listTechs()
            .catch(console.log);
    }

    render() {
        console.log()
        console.log(this.props);


        const { itemsTechs, currentPage, techsPerPage } = this.props;
        const itemsPodium = itemsTechs.slice(0, 3);

        const itemIndex = itemsTechs[0];
        console.log(itemIndex);

        //const itemsBottom = itemsTechs.splice(0,3);

        
        const indexOfLastTechs = currentPage * techsPerPage;
        const indexOfFirstTechs = indexOfLastTechs - techsPerPage;
        const currentTechs = itemsTechs.slice(indexOfFirstTechs, indexOfLastTechs);
        const pageNumbers = [];

        for (let i; i <= Math.ceil(itemsTechs.length / techsPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </li>
            );
        });

        return (

            <div className="container">
                <div className="content-ranking">
                    <div>
                            <div className="techs-podium">
                                {itemsPodium.map((technology, index) => (
                                    <div key={index}>
                                        <TechnologyPodium index={index} {...technology} />
                                    </div>
                                ))}
                            </div>
                            <div className="container content-listbottom">
                                <Navbar />
                                {itemsTechs.map((technology, index) => (
                                    <div key={index}>
                                        <BottomTechnologies index={index} {...technology} />
                                    </div>
                                ))}
                            </div>
                            <div className="pagination">
                                {renderPageNumbers}
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Technologies;
