import React from 'react';
import { Pagination } from 'antd';
import './style.scss';

const Pages = () => {
    return (
        <Pagination defaultCurrent = {1} total={50}/>
    )
}

export default Pages;