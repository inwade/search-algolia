import React from 'react';
import ListItem from '../ListItem/ListItem';
import './ListOfArticles.css';

function ListOfArticles (props) {   
    let listItems = []; 
    let dateArray = [];
// arrays for list items, dates, titles and urls 
    let titles = [];
    let urls = [];

    if (props.data !== undefined) {
    for (let i = 0; i < props.data.length; i++) {
// Make the proper dates
        let dateNow = new Date ();
        let postDate = new Date(props.data[i].created_at);
// Finding out the Hours and Days between now and Post Time
        let hoursLag = Math.floor((dateNow.getTime() - postDate.getTime()) / (3600 * 1000))
        let daysLag = Math.floor(Math.abs(dateNow.getTime() - postDate.getTime()) / (1000 * 3600 * 24));
// Conditionals for naming of the post dates
        if (daysLag < 30) {
            if (hoursLag < 24) {
                if (hoursLag < 1) {
                    dateArray.push('less than an hour ')
                } else {
            dateArray.push(hoursLag + ' hours');}
        }
                else {
            dateArray.push(daysLag + ' days');
                }
            }
        if (daysLag > 30 && daysLag < 365) {
                dateArray.push(Math.ceil(daysLag / 30) + ' months');
            }
        if (daysLag > 365) {
                dateArray.push(Math.ceil(daysLag / 365) + ' years')
            };
// Fix the empty titles, because not always we receive title in props.title 
        if (props.data[i].title === null && props.data[i].url === null) {
            if (props.data[i].story_title === null && props.data[i].url === null) {
                titles.push(props.data[i].comment_text)
                urls.push('')
            } else {
                titles.push(props.data[i].story_title)
                urls.push(props.data[i].story_url)
            }
        } else {
           titles.push(props.data[i].title)
            urls.push(props.data[i].url)
        }
        // Finalize the item
        listItems.push(<ListItem title={titles[i]} 
            mainLink={urls[i]} points={props.data[i].points} 
            author={props.data[i].author} 
            age={dateArray[i] + ' ago'} 
            comments={props.data[i].num_comments} 
            typeOfSearch={props.typeOfSearch}
            commentText={props.data[i].comment_text}
            key={props.data[i].objectID} 
            link={props.link}
            />)
    }
}
        return (    
            <div className="articles-block">
                <ul className="articles-list">
                    {listItems}
                </ul>
            </div>
        )
}

export default ListOfArticles