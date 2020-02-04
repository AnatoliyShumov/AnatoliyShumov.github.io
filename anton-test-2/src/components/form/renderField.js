import css from './form.module.scss'
import React from 'react';

const renderField = ({ input,placeholder, label, type, meta: { touched, error } }) => (
    <div className={type === "checkbox" ? css.fieldCheckboxWrapper : css.fieldWrapper}>
        <label className={css.label}>{label}</label>
        <div className={css.inputWrapper}>

            <input  className={`${css.input} ${touched && error ? css.inputError : ''}`} {...input} placeholder={placeholder} type={type}/>
            <div className={css.wrapperError}>{touched && error && <span className={css.spanError}>{error}</span>}</div>
        </div>
    </div>
);

export default renderField;