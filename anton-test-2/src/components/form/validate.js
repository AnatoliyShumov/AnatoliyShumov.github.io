const validate = values => {
    const errors = {}
    if (!values.email) {
        errors.email = 'Oops! You need to type your email here'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.password) {
        errors.password = 'Hey, we need a password here';
    } else if (values.password.length < 8) {
        errors.password = 'Minimum password length must be 8 characters'
    }
    if (!values.firstName) {
        errors.firstName= 'Hey, we need a First Name here';
    }
    if (!values.lastName) {
        errors.lastName= 'Hey, we need a Last Name here';
    }

    if (!values.specifi) {
        errors.specifi= 'Hey, we need a Specifi here';
    }
    if (!values.message) {
        errors.message= 'Hey, we need a Message here';
    }

    return errors
}

export default validate;