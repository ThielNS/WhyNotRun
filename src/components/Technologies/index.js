import React, { Component } from 'react';
import TechnologyPodium from './Podium'
import Pages from './Pagination'
import NavTabs from './Tabs';
import './style.scss'


class Technologies extends Component {

    constructor(props) {
        super(props);

        this.state = {

            currentPage: 3,

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
        /*         const itemsPodium = itemsTechs.slice(0, 3);
        */
        
        return (
            <div className="container _padding ranking">
                <div className="content-ranking">
                    <div>
                        <div className="container content-listbottom">
                            <NavTabs itemsTechs={itemsTechs} listTechsPerPosts={listTechsPerPosts} 
                            listTechsPerPoints={listTechsPerPoints} listTechs={listTechs}/>
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
