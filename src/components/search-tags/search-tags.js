import React, {Component} from 'react';

class SearchTags extends Component {
    render() {
        return (
            <div className="search__input__tags__field" contentEditable='true' suppressContentEditableWarning="true">
                &nbsp;
            </div>
        );
    }
}

export default SearchTags;