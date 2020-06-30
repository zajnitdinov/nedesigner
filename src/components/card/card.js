import React, {Component} from 'react';

class Card extends Component {
    renderTags = () => {
        const {tags} = this.props;
        return tags.map(el => <div key={el} className={`tag tag__${el}`}>{el}</div>)
    };
    render() {
        const {title, url, desc} = this.props;
        return (
            <div className="card">
                <div className="card__tags">
                    {this.renderTags()}
                </div>
                <a href={url} target='_blank' rel="noopener noreferrer" className="card__title">{title}</a>.
                <span className="card__desc">{desc}</span>
            </div>
        );
    }
}

export default Card;