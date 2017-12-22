import React from 'react';
import { Pagination } from 'antd';
import './style.scss';

const Pages = ({ currentPage, changePage }) => {
    return (
        <Pagination defaultCurrent={currentPage} total={50} onChange={changePage}/>
    )
};

export default Pages;