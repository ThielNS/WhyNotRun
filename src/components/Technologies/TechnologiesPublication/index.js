import React, { Component } from 'react';
import TechnologyPodium from "../Podium";
import ListTechnologies from "../Item";

class Technologies extends Component {

    render() {

        const { itemsTechs } = this.props;
        const itemsPodium = itemsTechs.slice(0, 3);

        return (

            <div>
                <div className="techs-podium">
                    {itemsPodium.map((technology, index) => (
                        <div key={index}>
                            <TechnologyPodium index={index} {...technology} />
                        </div>
                    ))}
                </div>

                <div className="menu-ranking">
                    <i className="menu-position">Posição</i>
                    <i className="menu-tech">Tecnologia</i>
                    <i className="menu-posts">Posts</i>
                    <i className="menu-points">Pontos</i>
                </div>
                {itemsTechs.map((technology, index) => (
                    <div key={index}>
                        <ListTechnologies index={index} {...technology} />
                    </div>
                ))}
            </div>
        )
    }
}

export default Technologies;