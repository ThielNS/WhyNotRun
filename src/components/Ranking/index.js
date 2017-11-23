import React, { Component } from 'react';
import TechnologyPodium from './podiumTechs'
import Navbar from './navbar'
import BottomTechs from './bottomTechs'

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

            ]
        }

    }

    render() {
        const { technologiesPodium } = this.state;
        const itemsPodium = technologiesPodium.slice(0, 3);
        const listItemsBottom = technologiesPodium.splice(0, 3);

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
                                        <BottomTechs key={index} {...technology} />
                                    ))}
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
        )
    }
}
export default Ranking;