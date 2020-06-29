import React, {Component} from 'react';

class SearchText extends Component {
    render() {
        return (
            <div className="search__input__text" contentEditable='true' suppressContentEditableWarning="true">
                &nbsp;
            </div>
        );
    }
}

export default SearchText;