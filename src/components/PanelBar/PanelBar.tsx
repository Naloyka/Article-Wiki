import React, { useState } from "react";
import Button from "../Button/Button";
import AuthorAvatar from "../AuthorAvatar/AuthorAvatar";
import './PanelBar.scss'

function PanelBar() {

    const [isModal, setIsModal] = useState(false)

    return (
        <aside className="panel-bar">
            <Button
                content='Добавить новую статью'
                onClick={(e) => setIsModal(!isModal)}
            />
            <AuthorAvatar
                author='Елена Налоева'
                size="m"
            />
        </aside>
    );
}

export default PanelBar;