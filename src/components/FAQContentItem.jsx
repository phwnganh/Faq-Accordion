import React from 'react';
import PlusIcon from '../assets/images/icon-plus.svg'
import MinusIcon from '../assets/images/icon-minus.svg'
const FaqContentItem = ({item, isOpenAnswer, onOpenAnswer}) => {
    return (
        <section className={"flex flex-col gap-6"}>
            <hr className={"border-t border-t-purple-100"}/>
            <button type={"button"} aria-expanded="false" aria-controls={`answer-${item.id}`} id={`question-${item.id}`} className={"flex items-center justify-between"}>
                <h2 onClick={onOpenAnswer} className={`text-preset-2 font-preset-2 leading-preset-2 hover:text-violet-600 focus:text-violet-600 cursor-pointer`}>{item.question}</h2>
                <div className={"flex justify-center items-center shrink-0"}>
                    <img src={isOpenAnswer ? MinusIcon : PlusIcon} alt={'icon'}/>
                </div>
            </button>
            {isOpenAnswer && (
                <p id={`answer-${item.id}`} aria-expanded aria-labelledby={`question-${item.id}`} role={"region"} className={"text-preset-3 leading-preset-3 text-purple-600"}>{item.answer}</p>
            )}
        </section>
    );
};

export default FaqContentItem;