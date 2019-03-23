import React, { Component } from 'react';
import Article from './article';

class Section extends Component {
    state = {
        articles: [
            {
                number: 1,
                title: "Flexible work life balance",
                description: "Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.",
            },
            {
                number: 2,
                title: "Global projects",
                description: "Nulla venenatis tempor dui in molestie. Nulla quis dictum purus, sit amet portitor est"
            },
            {
                number: 3,
                title: "Craftmanship values",
                description: "Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis."
            }
        ]
    }
    render() {
        return (
            <section className="section">
                <h4 className="section__h4">Why you might like Tacit</h4>
                <div className="articles_grid">
                    {this.state.articles.map(function (article) {
                        return (
                            <Article key={article.number} number={article.number} title={article.title} description={article.description} />
                        )
                    })
                    }
                </div>

            </section>
        );
    }
}

export default Section;