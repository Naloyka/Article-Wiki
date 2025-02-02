import React, { useState } from 'react'
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import Button from '../Button/Button.tsx';
import { storeArticle, CreateAction, EditAction } from '../../storeArticle.ts';
import { ArticleType } from '../../storeArticle.ts';
import { useId } from 'react'
import './ModalCreateArticle.scss'

interface ModalCreateArticleProps {
    currentArticle: ArticleType | null,
    setIsModal: (isOpen: boolean) => void;
}

const ModalCreateArticle = ({
    currentArticle,
    setIsModal
}: ModalCreateArticleProps) : JSX.Element => {

    const new_id: string = useId()
    const [id, setId] = useState(currentArticle?.id || '')
    const [date, setDate] = useState<Date>(currentArticle?.date || new Date())
    const [titleArticle, setTitleArticle] = useState<string>(currentArticle?.title || '')
    const [descriptionArticle, setDescriptionArticle] = useState<string>(currentArticle?.description || '')

    const saveArticle = () => {
        storeArticle.dispatch({
            type: 'create', payload: {
                title: titleArticle,
                description: descriptionArticle,
                date: new Date(),
                id: new_id
            }
        } satisfies CreateAction)
    }

    const editArticle = () => {
        storeArticle.dispatch({
            type: 'edit', payload: {
                id: id,
                title: titleArticle,
                description: descriptionArticle,
                date: date
            }
        } satisfies EditAction)
    }

    return (
        <div className='blackout' onClick={(e) => {
            let target = e.target as HTMLElement
            if (target.classList.contains('blackout')) {
                setIsModal(false)
            }
        }}>
            <div className='modal-create-article'>
                <h1 className='modal-create-article__title'>Новая статья</h1>
                <Input
                    placeholder='Введите заголовок'
                    value={titleArticle}
                    onChange={(e) => setTitleArticle(e)}
                />
                <Textarea
                    placeholder='Введите описание'
                    value={descriptionArticle}
                    onChange={(e) => setDescriptionArticle(e)}
                />
                <Button
                    content='Сохранить'
                    onClick={(e) => {
                        if (currentArticle?.title) {
                            editArticle()
                        } else {
                            saveArticle()
                        }
                        setIsModal(false)
                    }}
                />
            </div>
        </div>
    )
}

export default ModalCreateArticle