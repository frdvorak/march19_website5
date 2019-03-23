import React, { Component } from 'react';

class Article extends Component {
    state = {}
    render() {
        return (
            <article className="article">
                <div className="article__wrapper">
                    <span className="article__wrapper__number">{'# ' + this.props.number}</span>
                    <h1 className="article__wrapper__title">{this.props.title}</h1>
                    <p className="article__wrapper__description">{this.props.description}</p>
                </div>
            </article>
        );
    }
}

export default Article;