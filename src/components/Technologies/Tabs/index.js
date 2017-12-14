import React, { Component } from "react";
import { Tabs } from "antd";
import './style.scss';
import ListTechnologies from "../listTechnologies";

const TabPane = Tabs.TabPane;

class NavTabs extends Component {
 
    render() {
        return (
            <Tabs defaultActiveKey="1" onChange={this.callback}>
                <TabPane tab="#" key="0" />
                <TabPane tab="Tecnologias" key="1"><ListTechnologies/></TabPane>
                <TabPane tab="Publicações" key="2"><ListTechnologies/></TabPane>
                <TabPane tab="Pontuação" key="3"><ListTechnologies/></TabPane>
            </Tabs>
        )
    }
}

export default NavTabs;
