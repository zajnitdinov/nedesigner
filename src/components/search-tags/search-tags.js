import React, {Component} from 'react';
import DropdownMenuTag from "../dropdown-menu-tag";
import {connect} from "react-redux";

class SearchTags extends Component {
    renderTags = () => {
        const {tags, selectTag} = this.props;
        return tags.map(el => (
            <div key={el} className={`tag tag__${el}`} onClick={() => selectTag(el)}>
                {el}
            </div>))
    };
    render() {
        const {openDropdownMenuTag} = this.props;
        return (
            <div className="search__input__tags">
                <div className="search__input__tags__field"
                    onClick={openDropdownMenuTag}>
                    {this.renderTags()}
                </div>
                <DropdownMenuTag/>
            </div>
        );
    }
}

const mapStateToProps = ({searchTags: {selectedTags}}) => {
    return {tags: selectedTags};
};

const mapDispatchToProps = dispatch => {
    return {
        selectTag: (payload) => dispatch({
            type: 'DELETE_FROM_SELECTED_KEYS',
            payload
        }),
        openDropdownMenuTag: () => dispatch({type: 'OPEN_DROPDOWN_MENU_TAG'})
}};

export default connect(mapStateToProps, mapDispatchToProps)(SearchTags);