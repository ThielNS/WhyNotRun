import React, { Component } from 'react';
import "./Podium/podiumTechs.scss";
import Pages from './pagination'
import NavTabs from './Tabs';
import './style.scss'


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


    render() {

        const { itemsTechs, listTechs, listTechsPerPosts, listTechsPerPoints} = this.props;
        
        return (
            <div className="container _padding ranking">
                <div className="content-ranking">
                    <div>
                        <div className="container content-listbottom">
                            <NavTabs itemsTechs={itemsTechs} listTechs={listTechs} listTechsPerPosts={listTechsPerPosts} 
                            listTechsPerPoints={listTechsPerPoints} />
                        </div>

                        <div className="pagination">
                            <Pages />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Technologies;
