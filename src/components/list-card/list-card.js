import React, {Component} from 'react';
import Card from "../card";
import {connect} from "react-redux";

class ListCard extends Component {
    renderCards = () => {
        const {cards} = this.props;
        return cards.map(el => <Card key={el.id} {...el}/>)
    };
    render() {
        return (
            <div className="list">
                {this.renderCards()}
            </div>
        );
    }
}

const mapStateToProps = ({cards}) => {
    return { cards }
};

export default connect(mapStateToProps)(ListCard);