import React from 'react';

import './SortTab.css';



function SortTab (props) {
    
    

    return (
            <div className="sort-tab-block">
                <span>Search</span>
                <select onChange={props.handlerFirst}>
                    <option value="all">All</option>
                    <option value="story">Stories</option>
                    <option value="comment">Comments</option>
                </select>
                <span>by</span>
                <select onChange={props.handlerSecond} className="by-pop-or-date">
                    <option value="popularity">Popularity</option>
                    <option value="date">Date</option>
                </select>
                <span>for</span>
                <select onChange={props.handlerThird} className="by-time">
                    <option value="all-time">All time</option>
                    <option value="last-24h">Last 24h</option>
                    <option value="past-week">Past Week</option>
                    <option value="past-month">Past Month</option>
                    <option value="past-year">Past Year</option>
                </select>
            </div>
        )
    }


export default SortTab