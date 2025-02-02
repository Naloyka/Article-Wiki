import { useEffect, useReducer, useState } from 'react'
import { store } from './store'
import PanelBar from './components/PanelBar/PanelBar.tsx'
import Article from './components/Article/Article.tsx'
import ModalCreateArticle from './components/ModalCreaeArticle/ModalCreateArticleModalCreateArticle.tsx'
import { storeArticle, ArticleType } from './storeArticle.ts'
import './App.css'
import './App.scss'

function App() {

  const [, forseUpdate] = useReducer((x) => x + 1, 0)
  const [isModal, setIsModal] = useState(false)
  const [currentArticle, setCurrentArticle] = useState<ArticleType | null>(null)



  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      forseUpdate()
    })
    return unsubscribe
  }, []);

  useEffect(() => {
    if (!isModal) {
      setCurrentArticle(null)
    }
  }, [isModal]);

  return (
    <>
      {isModal && <ModalCreateArticle
        currentArticle={currentArticle}
        setIsModal={(e) => setIsModal(e)}
      />}

      <div className='main-page'>
        <PanelBar
          setIsModal={(e) => setIsModal(e)}
        />

        <main className='main-page__content'>
          {
            storeArticle.getState().map(({ title, description, id }: ArticleType) => {
              return <Article
                id={id}
                key={title + description}
                title={title}
                author={'Елена Налоева'}
                date={new Date()}
                content={description}
                setCurrentArticle={setCurrentArticle}
                setIsModal={setIsModal}
              />
            })
          }
        </main>
      </div>
    </>
  )
}

export default App


