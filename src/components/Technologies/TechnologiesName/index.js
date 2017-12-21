import React, { Component } from "react";
import { Item } from "./Item";

class TechnologiesName extends Component {

    componentDidMount() {
        this.props.listTechs()
            .catch(console.log);
    }

    render() {

        const { itemsTechs } = this.props;
        return (
            <div>

                <div className="menu-ranking">
                    <i className="menu-position">Posição</i>
                    <i className="menu-tech">Tecnologia</i>
                    <i className="menu-posts">Posts</i>
                    <i className="menu-points">Pontos</i>
                </div>
                {itemsTechs.map((technology, index) => (
                    <div key={index}>
                        <Item index={index} {...technology} />
                    </div>
                ))}
            </div>
        )
    }
}

export default TechnologiesName;