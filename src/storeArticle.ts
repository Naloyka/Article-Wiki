import { configureStore } from '@reduxjs/toolkit'
import { useId } from 'react'

export interface ArticleType {
    title: string,
    description: string,
    date: Date,
    id: string
}

export type CreateAction = {
    type: 'create',
    payload: ArticleType
}

export type EditAction = {
    type: 'edit',
    payload: ArticleType
}

type Action = CreateAction | EditAction

type initialArticleState = Array<ArticleType>

// const id = useId()
// console.log(id)

const initialState: initialArticleState = [
    {
        id: '1',
        title: 'Аналитика',
        date: new Date(),
        description: `Анализируй продажи, заказы, цены, рекламные кампании, считай юнит-экономику и следи за рентабельностью своих магазинов на маркетплейсах Wildberries, Ozon и Яндекс Маркет`
    },
    {
        id: '2',
        title: 'Анализ конкурентов',
        date: new Date(),
        description: `Следи за ценами, анализируй ассортимент и продажи, собирай ключевые слова у конкурентов в своей нише`
    }
]



const reducer = (state = initialState, action: Action): any => {
    console.log(state)
    switch (action.type) {
        case 'create': {

            const currentCounter = action.payload

            return [
                 currentCounter,
                ...state
            ]
        }
        case 'edit': {

            const currentArticle = action.payload
           
            return state.map((article) => {
                // Если нашли статью с таким же id, заменяем её
                if (article.id === currentArticle.id) {
                    return { ...article, ...currentArticle };
                }
                return article; // Иначе оставляем без изменений
            });
        }
        default:
            return state
    }
}

export const storeArticle = configureStore({
    reducer: reducer,
})
