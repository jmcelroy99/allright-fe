import React, {useState, useEffect} from 'react';
import {useIsMobile} from "../../hooks/is-mobile.hook";
import {OnBoardProvider} from "../onboard/onboard.context";
import OnBoardMobile from "../onboard/onboard.mobile";
import OnboardDesktop from "../onboard/onboard.desktop";
import {addAccountOnboardData} from "./add-account-onboard.data";

type Props = {};
const AddAccountOnboard = ({}:Props) => {
    const isMobile = useIsMobile();
    return (
        <OnBoardProvider steps={addAccountOnboardData}>
            {isMobile ? <OnBoardMobile/> : <OnboardDesktop/>}
        </OnBoardProvider>
    );
};

export default AddAccountOnboard;