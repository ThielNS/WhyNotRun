import React, { Component } from 'react';
import TechnologyPodium from './podiumTechs'
import ListTechnologies from './listTechnologies';
import Pages from './pagination'
import NavTabs from './Tabs';

import './style.scss'

class Technologies extends Component {

    constructor(props) {
        super(props);

        this.state = {
            
            currentPage: 3,

        };

        this.handleClick = this.handleClick.bind(this);
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

    onChangePage = (page) => {
        console.log(page);
        this.setState({
            currentPage: page,
        });
    }

    render() {
        console.log()
        console.log(this.props);

        //const Pagination = require('rc-pagination');
        const { itemsTechs, currentPage, techsPerPage } = this.props;
        const itemsPodium = itemsTechs.slice(0, 3);

        const itemIndex = itemsTechs[0];
        console.log(itemIndex);

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
                    onClick={this.handleClick}>
                    {number}
                </li>
            );
        });

        return (
            <div className="container _padding ranking">
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
                            <NavTabs />
                            {itemsTechs.map((technology, index) => (
                                <div key={index}>
                                    <ListTechnologies index={index} {...technology} />
                                </div>
                            ))}
                        </div>
                        <div className="pagination">
                            <Pages />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};


export default Technologies;
