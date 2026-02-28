import React from 'react';
import StarIcon from '../assets/images/icon-star.svg'
const FaqHeader = () => {
    return (
        <header className={"flex gap-6 items-center"}>
            <div className={"flex justify-center items-center shrink-0"}>
                <img src={StarIcon} alt="Star icon" />
            </div>
            <h1 className={"text-preset-1 font-preset-1 leading-preset-1"}>FAQs</h1>
        </header>
    );
};

export default FaqHeader;