import React, { Component } from 'react';
import { Table } from 'antd';
import TechnologyPodium from "../Podium";
import "../pagination/style.scss"


class Technologies extends Component {

    render() {

        const { itemsTechs } = this.props;
        const itemsPodium = itemsTechs.slice(0, 3);
        
                const columns = [
                    {
                        key: 'position',
                        title: 'Position',
                        dataIndex: 'indexKey'
                    },
                    {
                        key: 'name',
                        title: 'Name',
                        dataIndex: 'name',
                    }, {
                        key: 'posts',
                        title: 'Posts',
                        dataIndex: 'posts',
                    }, {
                        key: 'points',
                        title: 'Pontos',
                        dataIndex: 'points',
                    }
                ];
        
                let newClomuns = columns.map(
                    (data, index) => {
                        data.indexKey = index;
                        return data;
                    }
                );
        
        
        
                let newDatas = itemsTechs.map(
                    (technology, index) => {
                        technology.indexKey = index + 1 + 'º';
                        return technology;
                    }
                );
                const listTechnologies = newDatas.slice(3);
        
        return (

            < div >
                <div className="techs-podium">
                    {itemsPodium.map((technology, index) => (
                        <div key={index}>
                            <TechnologyPodium index={index} {...technology} />
                        </div>
                    ))}
                </div>
                <div className="container" key="table-body">
                    <Table index="table-body" rowKey={record => record.indexKey}
                        columns={newClomuns} dataSource={listTechnologies} size="middle" />
                </div>
            </div >
        )
    }
}

export default Technologies;