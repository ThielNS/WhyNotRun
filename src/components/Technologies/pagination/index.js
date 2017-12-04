import React from 'react';
import ReactDOM from 'react-dom';
import { Pagination } from 'antd';
import './style.scss';

const Pages = () => {
    return (
        <Pagination defaultCurrent = {10} total={50}/>
    )
}

export default Pages;