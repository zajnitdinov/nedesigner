import React, {Component} from 'react';

class DropdownMenuTag extends Component {
    render() {
        let style = this.props.visible ? {display: 'block'} : {display: 'none'};
        return (
            <div style={style} className="dropdown__menu__tag">
                <div className="tag tag__react">React</div>
                <div className="tag tag__vue">Vue</div>
            </div>
        );
    }
}

export default DropdownMenuTag;