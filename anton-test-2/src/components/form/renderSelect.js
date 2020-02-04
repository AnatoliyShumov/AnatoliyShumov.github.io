import css from './form.module.scss'
import React from 'react';

const renderSelect = ({ input, placeholder,children, label, type, meta: { touched, error } }) => (
    <div className={css.fieldWrapper}>
        <label className={css.label}>{label}</label>
        <div className={css.inputWrapper}>
            <select className={`${css.input} ${touched && error ? css.inputError : ''}`} {...input} >
                {children}
            </select>
            {/*<input  className={`${css.input} ${touched && error ? css.inputError : ''}`} {...input} placeholder={placeholder} type={type}/>*/}
            <div className={css.wrapperError}>{touched && error && <span className={css.spanError}>{error}</span>}</div>
        </div>
    </div>
);

export default renderSelect;
