import React from "react";
import { FC } from "react";
import calendar_icon from './img/calendar.svg'
import AuthorAvatar from "../AuthorAvatar/AuthorAvatar.tsx";
import { ArticleType } from "../../storeArticle.ts";
import './Article.scss'

type SetCurrentArticle = (article: ArticleType) => void;
type SetIsModal = (e: boolean) => void

type ArticleProps = {
    author: string;
    content: string,
    title: string,
    date: Date,
    id: string,
    setCurrentArticle: SetCurrentArticle,
    setIsModal: SetIsModal
}

const Article: FC<ArticleProps> = ({
    title,
    author,
    content,
    date,
    id,
    setCurrentArticle,
    setIsModal
}) => {

    return (
        <article className="article"
            onClick={() => {
                setCurrentArticle({
                    title: title,
                    description: content,
                    date: date,
                    id: id
                })
                setIsModal(true)
            }}
        >
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