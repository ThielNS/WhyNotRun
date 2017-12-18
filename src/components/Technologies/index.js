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

    render() {

        const { itemsTechs } = this.props;
        const itemsPodium = itemsTechs.slice(0, 3);

        return (
            <div className="container _padding ranking">
                <div className="content-ranking">
                    <div>

                        <div className="container content-listbottom">
                            <NavTabs />
                            <div className="techs-podium">
                                {itemsPodium.map((technology, index) => (
                                    <div key={index}>
                                        <TechnologyPodium index={index} {...technology} />
                                    </div>
                                ))}
                            </div>
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
}

export default Technologies;
