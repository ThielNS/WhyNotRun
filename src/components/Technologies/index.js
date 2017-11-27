import React, { Component } from 'react';
import TechnologyPodium from './podiumTechs'
import Navbar from './navbar';
import BottomTechnologies from './bottomTechnologies';
import Pagination from '../Pagination';

import './style.scss'

class Ranking extends Component {
    constructor(props) {
        super(props);

        this.state = {
            technologiesPodium: [
                {
                    title: 'Django',
                    position: '1',
                    points: '125 Mi',
                    posts: '256 Mi'
                },
                {
                    title: 'Django',
                    position: '2',
                    points: '125 Mi',
                    posts: '256 Mi'
                },
                {
                    title: 'Django',
                    position: '3',
                    points: '125 Mi',
                    posts: '256 Mi'
                },
                {
                    title: 'JavaScript',
                    position: '4',
                    points: '125 Mi',
                    posts: '256 Mi'
                },
                {
                    title: 'Java',
                    position: '5',
                    points: '125 Mi',
                    posts: '256 Mi'
                },
                {
                    title: 'C#',
                    position: '6',
                    points: '125 Mi',
                    posts: '256 Mi'
                },
                {
                    title: 'Ruby',
                    position: '7',
                    points: '125 Mi',
                    posts: '256 Mi'
                },
                {
                    title: 'Ruby',
                    position: '8',
                    points: '125 Mi',
                    posts: '256 Mi'
                },
                {
                    title: 'Ruby',
                    position: '9',
                    points: '125 Mi',
                    posts: '256 Mi'
                },

                {
                    title: 'Ruby',
                    position: '10',
                    points: '125 Mi',
                    posts: '256 Mi'
                },
                {
                    title: 'C#',
                    position: '6',
                    points: '125 Mi',
                    posts: '256 Mi'
                },
                {
                    title: 'Ruby',
                    position: '7',
                    points: '125 Mi',
                    posts: '256 Mi'
                },
                {
                    title: 'Ruby',
                    position: '8',
                    points: '125 Mi',
                    posts: '256 Mi'
                },
                {
                    title: 'Ruby',
                    position: '9',
                    points: '125 Mi',
                    posts: '256 Mi'
                },

                {
                    title: 'Ruby',
                    position: '10',
                    points: '125 Mi',
                    posts: '256 Mi'
                },

            ],
            currentPage: 1,
            techsPerPage: 3
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({
            currentPage: Number(e.target.id)
        });
    }

    render() {
        const { technologiesPodium, currentPage, techsPerPage } = this.state;
        const itemsPodium = technologiesPodium.slice(0, 3);
        const listItemsBottom = technologiesPodium.splice(0, 3);

        const indexOfLastTechs = currentPage * techsPerPage;
        const indexOfFirstTechs = indexOfLastTechs - techsPerPage;
        const currentTechs = technologiesPodium.slice(indexOfFirstTechs, indexOfLastTechs);
        const pageNumbers = [];

        for(let i; i <= Math.ceil(technologiesPodium.length / techsPerPage); i++){
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
                                {technologiesPodium.map((technology, index) => (
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

export default Ranking;
