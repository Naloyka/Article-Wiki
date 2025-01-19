import React from "react";
import calendar_icon from './img/calendar.svg'
import AuthorAvatar from "../AuthorAvatar/AuthorAvatar.tsx";
import './Article.scss'

interface ArticleProps {
    author: string;
    content: string,
    title: string,
    date: Date
}

function Article({
    title,
    author,
    content,
    date
}: ArticleProps) {

    return (
        <article className="article">
            <div className="article__info">
                <p className="article__author">
                    <AuthorAvatar
                        size="s"
                        author={author}
                    />
                    {author}
                </p>
                <p className="article__date">
                    <img src={calendar_icon} />{date?.toLocaleString('ru-ru')}
                </p>
            </div>
            <header className="article__header">
                <h2 className="article__title">{title}</h2>
            </header>
            <p className="article__text">
                {content}
            </p>
        </article>
    );
}

export default Article;