import React from 'react';

class ResultItem extends React.Component {
    limitRecipeTitle = (title, limit = 17) => {
        const newTitle = [];

        if (title.length > limit) {
            title.split(' ').reduce((acc, cur) => {
                if (acc + cur.length <= limit) {
                    newTitle.push(cur);
                }
                return acc + cur.length;
            }, 0);

            return `${newTitle.join(' ')} ...`;
        }

        return title;
    };

    render() {
        const item = this.props.item;

        return (
            <li>
                <a className="results__link" href="/">
                    <figure className="results__fig">
                        <img src={item['image_url']} alt={item['title']}/>
                    </figure>
                    <div className="results__data">
                        <h4 className="results__name">
                            {this.limitRecipeTitle(item['title'])}
                        </h4>
                        <p className="results__author">
                            {item['publisher']}
                        </p>
                    </div>
                </a>
            </li>
        );
    }
}

export default ResultItem;