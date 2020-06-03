import React from 'react';
import logo from './logo_h.png';
import searchIcon from './search.svg';
import algoliaLogo from './algolia.svg';
import settingIcon from './settings.svg';
import './HeaderSearch.css';

function HeaderSearch (props) {   
        return (
            <div className="header-search-block">
                
                <img src={logo} alt="logo-icon"></img>
                
                <h3>
                    Search Hacker News
                </h3>
                
                <div className="header-search-bar">
                    <img src={searchIcon} alt="search-icon"></img>
                
                    <input type="search" placeholder="Search stories by title, url or author" 
                    size="65" className="header-search-input" onChange={props.handler}></input>
                
                    <p>Search by <img src={algoliaLogo} alt="algolia"></img></p>
                </div>
                
                <a href="htttps://google.com" className="settings"> 
                <img src={settingIcon} alt="settings"></img> Settings </a>
            </div>
        )
}

export default HeaderSearch