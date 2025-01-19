import { configureStore } from '@reduxjs/toolkit'

export interface ArticleType {
    title: string,
    description: string,
    date: Date
}

export type CounterId = string

export type CreateAction = {
    type: 'create',
    payload: ArticleType
}

type Action = CreateAction

type initialArticleState = Array<ArticleType>

const initialState: initialArticleState = [
    {
        title: 'Аналитика',
        date: new Date(),
        description: `Анализируй продажи, заказы, цены, рекламные кампании, считай юнит-экономику и следи за рентабельностью своих магазинов на маркетплейсах Wildberries, Ozon и Яндекс Маркет`
    },
    {
        title: 'Анализ конкурентов',
        date: new Date(),
        description: `Следи за ценами, анализируй ассортимент и продажи, собирай ключевые слова у конкурентов в своей нише`
    }
]

const reducer = (state = initialState, action: Action): any => {
    switch (action.type) {
        case 'create': {

            const currentCounter = action.payload

            return [
                 currentCounter,
                ...state
            ]
        }
        default:
            return state
    }
}

export const storeArticle = configureStore({
    reducer: reducer,
})
