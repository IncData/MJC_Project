import React from 'react';


import './index.css'

const NewsSidebar = () => {
    return (
        <div className="sidebar">
            <div className="newsDiv">
                <h5>Title</h5>
                <p>Here will be some description</p>
            </div>
            <br/>
            <div className="newsDiv">
                <h5>Breaking News</h5>
                <p>Here will be some description as well</p>
            </div>
        </div>
    )
}

export default NewsSidebar;