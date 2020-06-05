import React, { useState, useEffect } from 'react';

import './index.css';
function Carousel() {
    const array = [ '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg' ];
    const [ main, setMain ] = useState(array[0]);
    let startTimeout;
    function myStartFunction(selected) {
        startTimeout = setTimeout(function(){
            let next;
            if(selected === undefined)
                next = array.indexOf(main)
            else
                next = array.indexOf(selected)

            if(next === array.length - 1){
                setMain(array[0])
            } else {
                setMain(array[next + 1])
            }
        }, 4000);
    }
    function myStopFunction() {
        clearTimeout(startTimeout);
    }
    const changeMain = (selected) => {
        myStopFunction()
        setMain(selected)
        myStartFunction(selected)
    }
    const circles = () => {
        return array.map((e, i) => {
            if(e === main) {
                return <div className={`circles main`} key={i}></div>
            } else {
                return <div className={`circles`} onClick={() => {changeMain(e)}} key={i}></div>
            }
        })
    }
    useEffect(() => {
        myStartFunction()
        return () => {
            myStopFunction()
        }
    })
    return (
        <div className="carousel-div">
            <h1 className="sectionTitle">Bienvenue dans MJC Strasbourg</h1>
            <img src={require(`./img/${main}`)} alt={main}/>
            {/*<div className="collection-of-circles">
                {circles()}
            </div>*/}
        </div>
    )
}

export default Carousel;