import React, { Component } from 'react';

class Article extends Component {
    render() {
        return (
            <article className="article">
                <span className="article__animatedBorder"></span>
                <span className="article__animatedBorder"></span>
                <div className="article__wrapper">
                    <figure className="article__wrapper__number">{'# ' + this.props.number}</figure>
                    <h1 className="article__wrapper__title">{this.props.title}</h1>
                    <p className="article__wrapper__description">{this.props.description}</p>
                </div>
            </article>
        );
    }
}

export default Article;