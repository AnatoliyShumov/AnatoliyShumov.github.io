import React from 'react';
import { Field, reduxForm } from 'redux-form';
import css from './form.module.scss';
import validate from "./validate";
import renderField from './renderField';
import renderSelect from './renderSelect';

import submit from './submit'


const Form = props => {
    const { handleSubmit, submitting} = props;

    return (

            <form className={css.formEntry} onSubmit={handleSubmit(submit)}>
                <div className={css.fieldWrapper}>
                    <p>Tell us what you think</p>
                    <div className={css.groupField}>
                        <Field
                            name="firstName"
                            type="text"
                            placeholder="First Name"
                            component={renderField}
                            label="First Name *"
                            // defaultValue={initialValues.firstName}
                        />

                        <Field
                            name="lastName"
                            type="text"
                            placeholder="Last Name"
                            component={renderField}
                            label="Last Name *"
                        />
                    </div>
                    <div className={css.groupField}>
                        <Field
                            name="email"
                            type="email"
                            placeholder="Email"
                            component={renderField}
                            label="Email *"
                        />
                        <Field
                               name="specifi"
                               type="select"
                               placeholder="Partnership offer"
                               component={renderSelect}
                               label="Please specify your need *">
                            <option />
                            <option value="ff0000">specifi-1</option>
                            <option value="00ff00">specifi-2</option>
                            <option value="0000ff">specifi-3</option>
                        </Field>
                    </div>
                    <Field
                        name="message"
                        type="message"
                        placeholder="Message"
                        component={renderField}
                        label="Message *"
                    />
                    <div className={css.buttonWrapper}>
                        <button  type="submit" disabled={submitting}>Send message</button>
                    </div>
                </div>
            </form>


    );
};

export default reduxForm({
    form: 'form',
    validate,
    // initialValues: {
    //     firstName: "",
    //     lastName: "",
    // },
    // destroyOnUnmount: false,
    // keepDirtyOnReinitialize: true,
    // a unique identifier for this form
})(Form);


