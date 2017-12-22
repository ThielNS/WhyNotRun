import React, { Component } from "react";
import { Tabs } from "antd";
import './style.scss';
import Technologies from "../TechnologiesPublication";
import TechnologiesPoints from "../TechnologiesPoints"
import TechnologiesName from "../TechnologiesName";

const TabPane = Tabs.TabPane;

class NavTabs extends Component {



    render() {
        const { itemsTechs, showTechs } = this.props;

        return (
            <Tabs defaultActiveKey="1" onChange={showTechs}>
                <TabPane tab="Tecnologias" key="1">
                  <TechnologiesName
                    itemsTechs={itemsTechs}
                  />
                </TabPane>
                <TabPane tab="Publicações" key="2">
                  <Technologies
                    itemsTechs={itemsTechs}
                  />
                </TabPane>
                <TabPane tab="Pontuação" key="3">
                  <TechnologiesPoints
                    itemsTechs={itemsTechs}
                  />
                </TabPane>
            </Tabs>
        )
    }
}

export default NavTabs;
