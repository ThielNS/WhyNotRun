import React, { Component } from 'react';
import "./style.scss";

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
                <div><div className="content-icbug">
                    {bugs.map((item, index) => (
                        <i class="fa fa-bug ic-bug" aria-hidden="true" index={index} {...item}></i>
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