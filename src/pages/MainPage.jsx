import React from 'react';
import FAQBoxSection from "../components/FAQBoxSection.jsx";

const MainPage = () => {
    return (
        <div className={"bg-[url(./assets/images/background-pattern-desktop.svg)] bg-purple-100 bg-top bg-no-repeat pt-42 min-h-screen"}>
            <div className={""}>
                <FAQBoxSection/>
            </div>
        </div>
    );
};

export default MainPage;