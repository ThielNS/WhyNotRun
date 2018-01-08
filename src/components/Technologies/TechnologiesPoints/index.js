import React, { Component } from 'react';
import { Table } from 'antd';
import TechnologyPodium from "../Podium";
import "../pagination/style.scss"


class TechnologiesPoints extends Component {

    render() {

        const { itemsTechs } = this.props;
        const itemsPodium = itemsTechs.slice(0, 3);

        const columns = [
            {
                key: 'position',
                title: 'Posição',
                dataIndex: 'indexKey',
            },
            {
                key: 'name',
                title: 'Name',
                dataIndex: 'name',
                rowKey: record => record.dataIndex,

            }, {
                key: 'posts',
                title: 'Posts',
                dataIndex: 'posts',
                rowKey: record => record.dataIndex,

            }, {
                key: 'points',
                title: 'Pontos',
                dataIndex: 'points',
                rowKey: record => record.dataIndex,

            }];

        let newColumns = columns.map((data, index) => {
            data.indexKey = index;
            return data;
        })

        let newDatas = itemsTechs.map(
            (technology, index) => {
                technology.indexKey = index + 1 + 'º';
                // data add a new property
                return technology;
            }
        );
        const listTechnologies = newDatas.slice(3);


        return (
            <div>
                <div className="techs-podium">
                    {itemsPodium.map((technology, index) => (
                        <div key={index}>
                            <TechnologyPodium index={index} {...technology} />
                        </div>
                    ))}
                </div>
                <div className="container points" key={listTechnologies.id}>
                    <Table index={listTechnologies.id} columns={newColumns} dataSource={listTechnologies} size="middle"
                        rowKey={record => record.indexKey}

                    />

                </div>

            </div>
        )
    }
}

export default TechnologiesPoints;