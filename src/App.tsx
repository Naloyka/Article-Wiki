import { useEffect, useReducer } from 'react'
import { DecAction, IncAction, store, CounterId } from './store'
import PanelBar from './components/PanelBar/PanelBar.tsx'
import Article from './components/Article/Article.tsx'
import './App.css'
import './App.scss'

function Counter({ counterId }: { counterId: CounterId }) {

  const [, forseUpdate] = useReducer((x) => x + 1, 0)

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      forseUpdate()
    })
    return unsubscribe
  }, []);

  return (
    <>


      <button
        onClick={(e) => {
          store.dispatch({ type: 'dec', payload: { counterId } } satisfies DecAction)
        }}
      >-</button>
      <p>{store.getState().counters[counterId]?.counter}</p>
      <button
        onClick={(e) => {
          store.dispatch({ type: 'inc', payload: { counterId } } satisfies IncAction)
        }}
      >+</button>
    </>
  )
}

export { Counter }


function App() {


  return (
    <div className='main-page'>
      <PanelBar />

      <main className='main-page__content'>

        <Article
          title='Заголовок статьи'
          author={'Елена Налоева'}
          date={new Date()}
          content={`
        Парсинг сайтов имеет множество практических применений и может быть полезен в различных сферах. Вот некоторые из основных целей, для которых используется парсинг сайтов:
        Анализ конкурентов
        Парсинг сайтов позволяет получить данные о конкурентах, такие как цены, описание продуктов, акции, рейтинги и т. д. Эта информация может быть использована для анализа рынка, разработки стратегий ценообразования, определения конкурентных преимуществ и принятия управленческих решений.
        Веб-скрапинг
        `}
        />

        <Article
          title='Заголовок статьи'
          author={'Елена Налоева'}
          date={new Date()}
          content={`
        Парсинг сайтов имеет множество практических применений и может быть полезен в различных сферах. Вот некоторые из основных целей, для которых используется парсинг сайтов:
        Анализ конкурентов
        Парсинг сайтов позволяет получить данные о конкурентах, такие как цены, описание продуктов, акции, рейтинги и т. д. Эта информация может быть использована для анализа рынка, разработки стратегий ценообразования, определения конкурентных преимуществ и принятия управленческих решений.
        Веб-скрапинг
        `}
        />

        <Counter counterId='first' />
      </main>
    </div>

  )
}

export default App


