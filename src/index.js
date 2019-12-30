import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/*class ThemePreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="theme-preview">
        <h2>{this.props.item.name}</h2>
        <p>{this.props.item.version}</p>
      </div>
    )
  }
}*/

class Theme extends React.Component {
  constructor(props) {
    super(props);
  }

  showPreview = () => {
    console.log( this.props.item );
    // <ThemePreview item={this.props.item} />
  }

  render() {
    return (
      <div className="theme col-md-3" onClick={this.showPreview}>
         <div className="inner" style={{backgroundImage: `url(${this.props.item.screenshot_url})`}}>
          <div className="overlay" />
          <div className="content">
            <h2 className="h5">{this.props.item.name}</h2>
            <p>Version {this.props.item.version}</p>
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
      <div className="themes row">
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
  
  initialLoadSites = () => {
    fetch( 'http://api.wordpress.org/themes/info/1.1/?action=query_themes&request[browse]=popular' ).then(response => {
        return response.json();
      }).then(data => {

        console.log( data );
        this.setState( {
          themes : data,
          search_term: '',
        } );
      });
  }

  componentDidMount = () => {
    this.initialLoadSites()
  }
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
      this.initialLoadSites()
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
      <div className="container">
        <div className="header">
          <h2>WordPress Themes</h2>

          <input type="search" className="search-input form-control" placeholder="Search.." onChange={this.searchTheme} />
          { this.searchTermBox() }
        </div>
        <Themes themes={this.state.themes} />
      </div>
    );
  }
}

ReactDOM.render(
  <ThemesContainer />,
  document.getElementById('root')
);
