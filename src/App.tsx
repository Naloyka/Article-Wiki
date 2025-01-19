import { useEffect, useReducer, useState } from 'react'
import { DecAction, IncAction, store, CounterId } from './store'
import PanelBar from './components/PanelBar/PanelBar.tsx'
import Article from './components/Article/Article.tsx'
import ModalCreateArticle from './components/ModalCreaeArticle/ModalCreateArticleModalCreateArticle.tsx'
import { storeArticle, ArticleType } from './storeArticle.ts'
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

  const [, forseUpdate] = useReducer((x) => x + 1, 0)
  const [isModal, setIsModal] = useState(false)

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      forseUpdate()
    })
    return unsubscribe
  }, []);


  return (
    <>
      {isModal && <ModalCreateArticle
        setIsModal={(e) => setIsModal(e)}
      />}

      <div className='main-page'>
        <PanelBar
          setIsModal={(e) => setIsModal(e)}
        />

        <main className='main-page__content'>
          {
            storeArticle.getState().map(({ title, description }: ArticleType) => {
              return <Article
                key={title + description}
                title={title}
                author={'Елена Налоева'}
                date={new Date()}
                content={description}
              />
            })
          }
          <Counter counterId='first' />
        </main>
      </div>
    </>
  )
}

export default App


