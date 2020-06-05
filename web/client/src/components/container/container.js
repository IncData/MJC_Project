import React from 'react';
import NewsSidebar from '../news-sidebar';

import './index.css';
const Container = (props) => {
    const { children } = props;
    const render = () => {
        const str = window.location.href.split('/')
        const path = str[str.length -1]
        if(path === 'url') {
            return (
                <div>
                    {/ ... /}
                    Another Component
                </div>
            )
        } else {
            return (
                <div className="template">
                    <div className="mainContent">
                        {children}
                    </div>
                    <NewsSidebar />
                </div>
            )
        }
    }

    return (
        render()
    )
}

export default Container;