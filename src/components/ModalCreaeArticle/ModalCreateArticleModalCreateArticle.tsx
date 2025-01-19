import React, { useState } from 'react'
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import Button from '../Button/Button.tsx';
import { storeArticle, CreateAction } from '../../storeArticle.ts';
import './ModalCreateArticle.scss'

interface ModalCreateArticleProps {
    setIsModal: (isOpen: boolean) => void;
}

const ModalCreateArticle = ({
    setIsModal
}: ModalCreateArticleProps) => {

    const [titleArticle, setTitleArticle] = useState('')
    const [descriptionArticle, setDescriptionArticle] = useState('')

    const saveArticle = () => {
        storeArticle.dispatch({ type: 'create', payload: { 
            title: titleArticle,
            description: descriptionArticle,
            date: new Date()
         } } satisfies CreateAction)
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
                        saveArticle()
                        setIsModal(false)
                    }}
                />
            </div>
        </div>
    )
}

export default ModalCreateArticle