import React from 'react';
import FaqHeader from "./FAQHeader.jsx";
import FaqMainContent from "./FAQMainContent.jsx";

const FaqBoxSection = () => {
    return (
        <div className={"bg-white rounded-2xl mx-6 p-6 sm:p-10 flex flex-col gap-8 max-w-150 sm:mx-auto"}>
            <FaqHeader/>
            <FaqMainContent/>
        </div>
    );
};

export default FaqBoxSection;