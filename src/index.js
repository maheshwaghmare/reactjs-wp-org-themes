import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Theme extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="theme">
         <div className="inner" style={{backgroundImage: `url(${this.props.item.screenshot_url})`}}>
          <div className="overlay" />
          <div className="content">
            <p>{this.props.item.name}</p>
            <p>{this.props.item.version}</p>
          </div>
        </div>
        {/*<p>{this.props.item.slug}</p>
        <p>{this.props.item.preview_url}</p>
        <p>{this.props.item.author}</p>
        <p>{this.props.item.screenshot_url}</p>
        <p>{this.props.item.rating}</p>
        <p>{this.props.item.num_ratings}</p>
        <p>{this.props.item.homepage}</p>*/}
        {/*<p>{this.props.item.description}</p>*/}
      </div>
    );
  }
}

class Themes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let result = this.props.themes;
    let themes = result.themes || {};
    return (
      <div className="themes">
      { Object.keys( themes ).map( (key) => <Theme item={themes[key]} key={key} /> ) }
      </div>
    );
  }
}
class ThemesContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      search_term : '',
      themes : [],
    }
  }
  // onChange = ( search ) => {
  //   this.setState( { search } );
  // };
  //
  // componentWillUpdate = () => {
  //   console.log( 'mount' + this.state.search_term );
  // }

  searchTheme = ( event ) => {
    let search_term = event.target.value;
    if( event.target.value ) {
      fetch( 'http://api.wordpress.org/themes/info/1.1/?action=query_themes&request[search]=' + event.target.value ).then(response => {
        return response.json();
      }).then(data => {

        console.log( data );
        this.setState( {
          themes : data,
          search_term: search_term,
        } );
      });
    } else {
      this.setState({
          search_term: '',
          themes : [],
      })
    }
    // console.log( event.target.value );
  }

  searchTermBox = () => {
    const isShow = this.state.search_term ? true : false;
    if( isShow ) {
      return <p>Search for <code>{this.state.search_term}</code></p>;
    }

    return '';
  }

  render() {
    return (
      <div>
        <h2>WordPress Themes</h2>

        <input type="search" className="search-input" placeholder="Search.." onChange={this.searchTheme} />
        { this.searchTermBox() }

        <Themes themes={this.state.themes} />
      </div>
    );
  }
}

ReactDOM.render(
  <ThemesContainer />,
  document.getElementById('root')
);
