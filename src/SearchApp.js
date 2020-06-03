import React from 'react';

import HeaderSearch from './components/HeaderSearch/HeaderSearch';
import SortTab from './components/SortTab/SortTab';
import ListOfArticles from './components/ListOfArticles/ListOfArticles';

import './SearchApp.css';

class SearchApp extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modified: false,
      data: '',
      searchThrough: '&tags=front_page',
      searchBy: 'search?',
      searchByTime: '',
      typeOfSearch: 'all'
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSortFirst = this.handleSortFirst.bind(this);
    this.handleSortSecond = this.handleSortSecond.bind(this);
    this.handleSortThird = this.handleSortThird.bind(this);
}
// fetch the first page
componentDidMount () {
  let url = `http://hn.algolia.com/api/v1/${this.state.searchBy}query=${this.state.searchThrough}${this.state.searchByTime}`;
  
  fetch(url)
  .then(response => response.json())
  .then(json => this.setState({data: json.hits}))
}
// Change the list if the Sort variables changed
  componentDidUpdate (prevProps, prevState) {
    
    if (prevState.searchBy !== this.state.searchBy || 
      prevState.searchThrough !== this.state.searchThrough || prevState.searchByTime !== this.state.searchByTime) {
      let url = `http://hn.algolia.com/api/v1/${this.state.searchBy}query=${this.state.searchThrough}${this.state.searchByTime}`;
      fetch(url)
      .then(response => response.json())
      .then(json => this.setState({data: json.hits}))    
  }
}
  // Handler for Search Bar
  handleSearch (event) {
    fetch(`http://hn.algolia.com/api/v1/${this.state.searchBy}query=${event.target.value}${this.state.searchThrough}${this.state.searchByTime}`)
    .then(response => response.json())
    .then(json => this.setState({data: json.hits}))
  }
// Handler for Search Bar

// change the content type for search and their layout (All, Stories, Comments)
  handleSortFirst (event) {
    if (event.target.value === 'all') {
      this.setState({
       modified: true,
       searchThrough: ' ',
       typeOfSearch: 'all'
     })
   }
   if (event.target.value === 'story') {
     this.setState({
       modified: true,
       searchThrough: '&tags=story',
       typeOfSearch: 'story'
     })
    }
    if (event.target.value === 'comment') {
       this.setState({
         modified: true,
         searchThrough: '&tags=comment',
         typeOfSearch: 'comment'
       })
     }
    }
// Change the sorting basis (Popularity / Date)
  handleSortSecond (event) {
    if (event.target.value === 'popularity') {
      this.setState({
        modified: true,
        searchBy: 'search?',
      })
    }
    if (event.target.value === 'date') {
      this.setState({
        modified: true,
        searchBy: 'search_by_date?',
      })
    }
  }
  // Change the sorting time (All time, last year etc.)
  handleSortThird (event) {
    let timeNow = new Date ();
    let y = timeNow.getTime() / 1000;
    if (event.target.value === 'all-time') {
      this.setState({
        searchByTime: ''
      })
    }
    if (event.target.value === 'last-24h') {
      let x = y - 86400; 
      this.setState({
        searchByTime: `&numericFilters=created_at_i>${x},created_at_i<${y}`
      })
    }
    if (event.target.value === 'past-week') {
      let x = y - 604800;
      this.setState({
        searchByTime: `&numericFilters=created_at_i>${x},created_at_i<${y}`
      })
    }
    if (event.target.value === 'past-month') {
      let x = y - 2592000;
      this.setState({
        searchByTime: `&numericFilters=created_at_i>${x},created_at_i<${y}`
      })
    }
    if (event.target.value === 'past-year') {
      let x = y - 31536000;
      this.setState({
        searchByTime: `&numericFilters=created_at_i>${x},created_at_i<${y}`
      })
    }
  }
// 
// render final result of App
  render () {
  return (
    <div className="app-holder">
      <HeaderSearch handler={this.handleSearch}/>
      
      <SortTab handlerFirst={this.handleSortFirst} handlerSecond={this.handleSortSecond} handlerThird={this.handleSortThird}/>
      
      <ListOfArticles data={this.state.data} typeOfSearch={this.state.typeOfSearch} />
    </div>
  );
}
// render final result of App



}

export default SearchApp;