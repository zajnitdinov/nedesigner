import React, {Component} from 'react';

class Card extends Component {
    render() {
        return (
            <div className="card">
                <div className="card__tags">
                    <div className="tag tag__react">React</div>
                    <div className="tag tag__vue">Vue</div>
                </div>
                <a href="!#" className="card__title">Pinterest</a>.
                <span className="card__desc">
                        Чаще всего это первый ресурс, на который идут дизайнеры самых разных
                        специализаций в поисках вдохновения. Самое удобная функция на
                        Pinterest — это возможность создавать свои подборки.
                    </span>
            </div>
        );
    }
}

export default Card;