/* eslint-disable radix */
import React, { Component } from 'react';
import NavTabs from './Tabs';
import './style.scss'
import "./Podium/podiumTechs.scss";


class Technologies extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentPage: 1,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({
            currentPage: Number(e.target.id)
        });
    }

    changePage = value => {
        debugger
        this.setState({
            currentPage: value
        });
    };

    showTechs = value => {

        const { listTechsPerPosts, listTechsPerPoints, listTechs } = this.props;
        const { currentPage } = this.state;
        const tabKey = parseInt(value);

        if (tabKey === 1) {
            listTechs(currentPage);
        } else if (tabKey === 2) {
            listTechsPerPosts(currentPage);
        } else if (tabKey === 3) {
            listTechsPerPoints(currentPage);
        } else {
            listTechs(currentPage);
        }
    };

    componentWillMount() {
        this.showTechs();
    }


    render() {

        const { itemsTechs } = this.props;
        const { currentPage } = this.state;

        return (
            <div className="container _padding ranking">
                <div className="content-ranking">
                    <div>
                        <div className="container content-listbottom">
                            <NavTabs
                                currentPage={currentPage}
                                itemsTechs={itemsTechs}
                                showTechs={this.showTechs.bind(this)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Technologies;
