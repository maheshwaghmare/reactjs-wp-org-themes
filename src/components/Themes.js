import React from 'react';
import Theme from './Theme'

function Themes( props ) {
  let themes = props.data.themes || {};
  return (
    <div className="themes row">
    { Object.keys( themes ).map( (key) => <Theme item={themes[key]} key={key} /> ) }
    </div>
  );
}

export default Themes