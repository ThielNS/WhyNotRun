import React, { Component } from "react";
import { Tabs } from "antd";
import './style.scss';
import Technologies from "../TechnologiesPublication";
import TechnologiesPoints from "../TechnologiesPoints"
import TechnologiesName from "../TechnologiesName";

const TabPane = Tabs.TabPane;

class NavTabs extends Component {

    render() {
        const {itemsTechs, listTechsPerPosts, listTechsPerPoints, listTechs} = this.props;

        return (
            <Tabs defaultActiveKey="1" onChange={this.callback}>
                <TabPane tab="Tecnologias" key="1"><TechnologiesName itemsTechs={itemsTechs} listTechs={listTechs}/></TabPane>
                <TabPane tab="Publicações" key="2"><Technologies itemsTechs={itemsTechs} listTechsPerPosts={listTechsPerPosts}/></TabPane>
                <TabPane tab="Pontuação" key="3"><TechnologiesPoints itemsTechs={itemsTechs} listTechsPerPoints={listTechsPerPoints}/></TabPane>
            </Tabs>
        )
    }
}

export default NavTabs;
