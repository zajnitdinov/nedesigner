import React from 'react';
import SearchText from "../search-text";
import SearchTags from "../search-tags";

const Search = () => {
    return (
        <div className="search">
            <div className="search__input">
                <SearchText/>
                <div className="search__input__tags">
                    <SearchTags/>
                </div>
            </div>
        </div>
    );
};

export default Search;