import React, { Component } from "react";
import { Tabs } from "antd";
import './style.scss';
import BottomTechnologies from "../bottomTechnologies";

const TabPane = Tabs.TabPane;

class NavTabs extends Component {
 
     callback = key => {
        //console.log(key)
     }

    render() {
        return (
            <Tabs defaultActiveKey="1" onChange={this.callback}>
                <TabPane tab="Tecnologias" key="1">{BottomTechnologies}</TabPane>
                <TabPane tab="Publicações" key="2">{BottomTechnologies}</TabPane>
                <TabPane tab="Pontuação" key="3">{BottomTechnologies}</TabPane>
            </Tabs>
        )
    }
}

export default NavTabs;
