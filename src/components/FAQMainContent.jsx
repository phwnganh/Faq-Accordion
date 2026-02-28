import React, {useState} from 'react';
import {data} from "../datas/data.js";
import FAQContentItem from "./FAQContentItem.jsx";

const FaqMainContent = () => {
    const [openAnswerId, setOpenAnswerId] = useState(null)

    const handleOpenAnswer = (id) => {
        setOpenAnswerId(prev => prev === id ? null : id)
    }
    return (
        <main className={""}>
            {data.map((item) => (
                <FAQContentItem key={item.id} item={item} isOpenAnswer={openAnswerId === item.id} onOpenAnswer={() => handleOpenAnswer(item.id)}/>
            ))}
        </main>
    );
};

export default FaqMainContent;