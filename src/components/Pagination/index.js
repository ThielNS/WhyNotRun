import React, { Component } from 'react';
import Page from './Page';

import './style.scss'

class Pagination extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pages: [
                {
                    page: '1'
                },
                {
                    page: '2'
                },
                {
                    page: '3'
                },
                {
                    page: '4'
                },
                {
                    page: '5'
                }
            ]
        }
    }

    render() {
        const { pages } = this.state;
        return (
            <ul className="content-pagination">
                <i class="fa fa-angle-double-left" aria-hidden="true"></i>
                {pages.map((page, index) => (
                    <Page key={index} {...page} />
                ))}
                <i class="fa fa-angle-double-right" aria-hidden="true"></i>
            </ul>
        )
    }
}
export default Pagination;