import React from 'react';
import PlusIcon from '../assets/images/icon-plus.svg'
import MinusIcon from '../assets/images/icon-minus.svg'
const FaqContentItem = ({item, isOpenAnswer, onOpenAnswer}) => {
    return (
        <section className={"flex flex-col gap-6"}>
            <hr className={"border-t border-t-purple-100"}/>
            <div className={"flex items-center justify-between"}>
                <h3 onClick={onOpenAnswer} className={`text-preset-2 font-preset-2 leading-preset-2 hover:text-violet-600 cursor-pointer`}>{item.question}</h3>
                <div className={"flex justify-center items-center shrink-0"}>
                    <img src={isOpenAnswer ? MinusIcon : PlusIcon} alt={'icon'}/>
                </div>
            </div>
            {isOpenAnswer && (
                <p className={"text-preset-3 leading-preset-3 text-purple-600"}>{item.answer}</p>
            )}
            <div></div>
        </section>
    );
};

export default FaqContentItem;