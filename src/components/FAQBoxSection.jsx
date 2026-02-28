import React from 'react';
import FaqHeader from "./FAQHeader.jsx";
import FaqMainContent from "./FAQMainContent.jsx";

const FaqBoxSection = () => {
    return (
        <main className={"bg-white rounded-2xl p-10 flex flex-col gap-8 max-w-150 mx-auto"}>
            <FaqHeader/>
            <FaqMainContent/>
        </main>
    );
};

export default FaqBoxSection;