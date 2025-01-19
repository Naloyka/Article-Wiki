import React, { useState } from "react";
import Button from "../Button/Button";
import AuthorAvatar from "../AuthorAvatar/AuthorAvatar";
import './PanelBar.scss'

interface PanelBarProps {
    setIsModal: (isOpen: boolean) => void
}

function PanelBar({
    setIsModal
}: PanelBarProps) {


    return (
        <aside className="panel-bar">
            <Button
                content='Добавить новую статью'
                onClick={() => setIsModal(true)}
            />
            <AuthorAvatar
                author='Елена Налоева'
                size="m"
            />
        </aside>
    );
}

export default PanelBar;