import React, {useState, useEffect} from 'react';
import Styles from './profile-addresses.styles';
import ProfileTitle from "../../components/profile-title/profile-title.component";
import {ArrayHelpers, Field, FieldArray, FieldProps} from "formik";
import FormRow from "../../../../components/forms/form-row/form-row.component";
import FormInputLabeled from "../../../../components/forms/form-input-labeled/form-input-labeled.component";
import {useTranslation} from "../../../../modules/i18n/i18n.hook";
import FormCountrySelect from "../../../../components/forms/form-country-select/form-country-select.component";
import {AddressType} from "../../../../types/address.type";
import {useProfileContext} from "../../profile.context";
import ProfileField from "../../components/profile-field/profile-field.component";

type Props = {};
const ProfileAddresses = ({}: Props) => {
    const {t} = useTranslation();
    const {editMode} = useProfileContext();
    const addAddr = (helpers: ArrayHelpers, i: number) => {
        const empty_addr: AddressType = {
            country: {
                code: '',
                id: 0,
                name_english: '',
                name_local: '',
                is_active: true
            },
            city: '',
            address: '',
            postal_code: '',
            region: '',
            is_default: false,
        };
        helpers.insert(i, empty_addr);
    };
    return (
        <Styles>
            <ProfileTitle title={'Addresses'}/>
            <Field name={'addresses'}>
                {
                    ({field}: FieldProps) => (
                        <FieldArray name={'addresses'}>
                            {
                                (helpers: ArrayHelpers) => (
                                    <>
                                        {
                                            field?.value?.map((_: any, i: number) => (
                                                editMode ? (
                                                    <FormRow>
                                                        <FormInputLabeled name={`addresses.${i}.address`}
                                                                          label={t('profile:address')}/>
                                                        <FormRow>
                                                            <FormInputLabeled name={`addresses.${i}.postal_code`}
                                                                              label={t('profile:postal-code')}/>
                                                            <FormInputLabeled name={`addresses.${i}.city`}
                                                                              label={t('profile:city')}/>
                                                        </FormRow>
                                                        <FormCountrySelect name={`addresses.${i}.country.code`}
                                                                           label={t('profile:country')}/>
                                                    </FormRow>
                                                ) : (
                                                    <FormRow>
                                                        <ProfileField type={'text'} name={`addresses.${i}.address`}
                                                                      label={t('profile:address')}/>
                                                        <FormRow>
                                                            <ProfileField type={'text'}
                                                                          name={`addresses.${i}.postal_code`}
                                                                          label={t('profile:postal-code')}/>
                                                            <ProfileField type={'text'}
                                                                          name={`addresses.${i}.city`}
                                                                          label={t('profile:city')}/>
                                                        </FormRow>
                                                        <ProfileField type={'text'} name={`addresses.${i}.country.name_english`}
                                                                      label={t('profile:country')}/>
                                                    </FormRow>
                                                )
                                            ))
                                        }
                                        {
                                            editMode?(
                                                <p className={'profile-addr__add'}
                                                   onClick={() => addAddr(helpers, field.value.length)}>{t('profile:add-address')}</p>
                                            ):null
                                        }
                                    </>
                                )
                            }
                        </FieldArray>
                    )
                }
            </Field>
        </Styles>
    )
};

export default ProfileAddresses;
