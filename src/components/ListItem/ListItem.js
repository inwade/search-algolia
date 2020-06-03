import React from 'react';

import './ListItem.css';

function ListItem (props) {
// remove the text of the inner links
    let linkText;
    if (props.mainLink === null || props.mainLink === '') {
        linkText = ' ';
    } else {
        linkText = '( ' + props.mainLink + ' )';
    }
// filter by the search type 
    if (props.typeOfSearch === 'all' || props.typeOfSearch === 'story') {    
return (
<li className="list-item">
    <div className="article">
        <div className="article-upper-block">
            <p>{props.title}</p>
            <span><a href={props.mainLink} className="link-text"> {linkText} </a></span>
        </div>
        <div className="article-lower-block">
            <span>
            <a href={props.mainLink}> {props.points} points</a>
            </span>
            <span className="span-divider"> | </span>
            <span>
            <a href={props.mainLink}> {props.author} </a>
            </span>
            <span className="span-divider"> | </span>
            <span>
            <a href={props.mainLink}> {props.age} </a>
            </span>
            <span className="span-divider"> | </span>
            <span>
            <a href={props.mainLink}> {props.comments} comments</a>
            </span>
        </div>
    </div>
</li>
        )
} if (props.typeOfSearch === 'comment') {
    return  (
<li className="list-item">
    <div className="article">
        <div className="article-upper-block">
            <p className="comment-text">{props.commentText}</p>
            <span><a href={props.mainLink} className="link-text"> </a></span>
        </div>
        <div className="article-lower-block">
            <span>
            <a href={props.mainLink}> {props.points} points</a>
            </span>
            <span className="span-divider"> | </span>
            <span>
            <a href={props.mainLink}> {props.author} </a>
            </span>
            <span className="span-divider"> | </span>
            <span>
            <a href={props.mainLink}> {props.age} </a>
            </span>
            <span className="span-divider"> | </span>
            <span>
            <a href={props.mainLink}> {props.comments} comments</a>
            </span>
        </div>
    </div>
</li>)
}
    }

export default ListItem;