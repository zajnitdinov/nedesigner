import React, {Component} from 'react';
import {connect} from "react-redux";
import onClickOutside from 'react-onclickoutside';

class DropdownMenuTag extends Component {
    handleClickOutside = () => {
        this.props.closeDropdownMenuTag();
    };
    render() {
        let style = this.props.visible ? {display: 'block'} : {display: 'none'};
        const {tags, addToSelectedKeys} = this.props;
        return (
            <div style={style} className="dropdown__menu__tag">
                {tags.map(el => (
                    <div
                        key={el}
                        className={`tag tag__${el}`}
                        onClick={() => addToSelectedKeys(el)}>{el}
                    </div>))}
            </div>
        );
    }
}

const mapStateToProps = ({searchTags: {tags, selectedTags, visible}}) => {
    return {
        tags: tags.filter(el => !selectedTags.includes(el)),
        visible: visible
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addToSelectedKeys: (payload) => dispatch ({
            type: 'ADD_TO_SELECTED_KEYS',
            payload
        }),
        closeDropdownMenuTag: () => dispatch ({type: 'CLOSE_DROPDOWN_MENU_TAG'})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(onClickOutside(DropdownMenuTag));