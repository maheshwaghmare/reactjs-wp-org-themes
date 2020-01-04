import React from 'react';
import axios from 'axios';
import Themes from './Themes'
import SearchSuggession from './SearchSuggession'

class ThemesContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            search_term: '',
            themes: [],
        }
    }

    initialLoadSites = () => {
        axios.get('https://api.wordpress.org/themes/info/1.1/?action=query_themes&request[browse]=popular')
            .then(response => {
                this.setState({
                    themes: response.data,
                    search_term: '',
                });
            });
    }

    componentDidMount = () => {
        this.initialLoadSites()
    }

    searchTheme = (event) => {
        let search_term = event.target.value;
        if (event.target.value) {
            axios.get(`https://api.wordpress.org/themes/info/1.1/?action=query_themes&request[search]=${event.target.value}`)
                .then(response => {
                    this.setState({
                        themes: response.data,
                        search_term: search_term,
                    });
                });
        } else {
            this.initialLoadSites()
        }
    }

    render() {
        return (
            <div className="container">
                <div className="header">
                    <h2>WordPress Themes</h2>
                    <input type="text" className="search-input form-control" placeholder="Search theme.." onChange={this.searchTheme} />
                    <SearchSuggession searchTerm={this.state.search_term} />
                </div>
                <Themes data={this.state.themes} />
              </div>
        );
    }
}

export default ThemesContainer