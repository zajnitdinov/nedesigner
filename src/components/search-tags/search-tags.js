import React, {Component} from 'react';
import DropdownMenuTag from "../dropdown-menu-tag";

class SearchTags extends Component {
    state = {
        visibleDropdownMenu: false
    };
    handleClick = (e) => {
        this.setState({visibleDropdownMenu: true})
    };
    tags = ['react','vue'];
    render() {
        return (
            <div className="search__input__tags">
                <div className="search__input__tags__field"
                    contentEditable='true'
                    suppressContentEditableWarning="true"
                    onClick={this.handleClick}>
                    {this.tags.map(el => (
                        <div className={`tag tag__${el}`}>
                            {el} <span className='tag__delete'>x</span>
                        </div>))}
                </div>
                <DropdownMenuTag visible={this.state.visibleDropdownMenu}/>
            </div>
        );
    }
}

export default SearchTags;