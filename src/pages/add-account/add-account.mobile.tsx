import React, {useContext} from 'react';
import IdentityMobileLayout from "../../layouts/identity-mobile-layout/identity-mobile-layout.component";
import AddAccountForm from "./add-account.form";
import {useTranslation} from "../../modules/i18n/i18n.hook";
import {AuthDataContext} from "../../modules/auth/auth-data.context";

const AddAccountMobile = () => {
    const {t} = useTranslation();
    const {data} = useContext(AuthDataContext);
    return (
        <IdentityMobileLayout title={`Hello ${data?.user?.first_name}`}
                              desc={t('auth:add-account.desc')}>
            <AddAccountForm/>
        </IdentityMobileLayout>
    );
};

export default AddAccountMobile;
