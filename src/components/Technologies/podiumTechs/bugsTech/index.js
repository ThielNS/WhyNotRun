import React, { Component } from 'react';
import "./style.scss";
import ItemBug from "./itemBug";

class BugsTech extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bugs: []
        }
    }

    render() {

        const listBugs = [];

        for (let i = 0; i <= 2; i++) {
            const { bugs } = this.state;
            bugs.push(
                <div>
                    <div>
                        {bugs.map((item, index) => (
                            <div key= {index}>
                                <ItemBug index={index} {...item} />
                            </div>
                        ))}
                    </div>
                </div>
            )
        }



        const { bugs } = this.state;
        return (
            <div>
                {console.log({ bugs })}
                {bugs}
            </div>
        )
    }
}

export default BugsTech;