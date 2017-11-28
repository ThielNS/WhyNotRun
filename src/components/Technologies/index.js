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
            itemsTechs: [
                  {
                    "title": "Swift",
                    "position": 1,
                    "points": 125,
                    "posts": 256

                }, {
                    "title": "Python",
                    "position": 2,
                    "points": 125,
                    "posts": 389
                }, {
                    "title": "Objective-C",
                    "position": 3,
                    "points": 135,
                    "posts": 198
                }, {
                    "title": "Ruby",
                    "position": 4,
                    "points": 187,
                    "posts": 205
                }, {
                    "title": "Java",
                    "position": 5,
                    "points": 187,
                    "posts": 205
                }, {
                    "title": "JavaScript",
                    "position": 6,
                    "points": 204,
                    "posts": 404
                }, {
                    "title": "C#",
                    "position": 7,
                    "points": 187,
                    "posts": 205
                }, {
                    "title": "C#",
                    "position": 8,
                    "points": 187,
                    "posts": 205
                }, {
                    "title": "C#",
                    "position": 9,
                    "points": 187,
                    "posts": 205
                }, {
                    "title": "C#",
                    "position": 10,
                    "points": 187,
                    "posts": 205
                }  
            ],
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
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        console.log(this.props);
        const { itemsTechs, currentPage, techsPerPage } = this.state;

        const itemsPodium = itemsTechs.slice(0, 3);
        const listItemsBottom = itemsTechs.splice(0, 3);

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
                <ul className="content-ranking">
                    <div>
                        <div>
                            <div className="techs-podium">
                                {itemsPodium.map((technology, index) => (
                                    <TechnologyPodium key={index} {...technology} />
                                ))}
                            </div>
                            <div className="container content-listbottom">
                                <Navbar />
                                {itemsTechs.map((technology, index) => (
                                    <BottomTechnologies key={index} {...technology} />
                                ))}
                            </div>

                            <div className="pagination">
                                {renderPageNumbers}
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
        )
    }
}

export default Technologies;
