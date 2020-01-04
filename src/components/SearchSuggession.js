import React from 'react';

function SearchSuggession(props) {
    const searchTerm = props.searchTerm ? true : false;

    if ( searchTerm ) {
        return <p>Search for <code>{props.searchTerm}</code></p>;
    }

    return <p>E.g. Search theme <code>bhari</code>, <code>blog</code>, <code>ecommerce</code>, etc.</p>;
}

export default SearchSuggession