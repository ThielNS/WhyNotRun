import React, { Component } from "react";
import { Table } from 'antd';

import "../pagination/style.scss"


class TechnologiesName extends Component {

    render() {
        const { itemsTechs } = this.props;

        const columns = [{
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
        }];

        let newColumns = columns.map((data, index) => {
            data.indexKey = index;
            return data;
        })

        return (
            <div className="container" key="table-body">
                <Table columns={newColumns}
                    dataSource={itemsTechs}
                    size="middle"
                    rowKey={record => record.name}
                    
                />
            </div>
        )
    }
}

export default TechnologiesName;