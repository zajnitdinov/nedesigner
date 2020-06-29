import React, {Component} from 'react';

class DropdownMenuTag extends Component {
    render() {
        return (
            <div className="dropdown__menu__tag">
                <div className="tag tag__react">React</div>
                <div className="tag tag__vue">Vue</div>
            </div>
        );
    }
}

export default DropdownMenuTag;