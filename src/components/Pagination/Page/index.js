import React from 'react';

import './style.scss';

const Page = ({ page }) => {
    return (
        <div className={page >= 5 ? 'overflow' : 'page'}>
            <li>
                <i> {page} </i>
            </li>
        </div>
    );
}

export default Page;